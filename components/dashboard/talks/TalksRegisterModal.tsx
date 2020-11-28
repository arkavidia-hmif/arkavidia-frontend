import { useContext, useEffect } from "react";
import Modal from "react-modal";
import { Event } from "interfaces/event";
import FilledButton from "components/FilledButton";
import { Theme } from "styles/theme";
import useProgress from "utils/hooks/useProgress";
import Spinner from "components/Spinner";
import { registerForEvent } from "api/event";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";

interface Props {
  event: Event | null,
  closeCb: () => void,
  mutate: () => void
}

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: "min(500px, 80vw)"
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 20
  }
};

const TalksRegisterModal: React.FC<Props> = ({ event, closeCb, mutate }) => {
  const progressObj = useProgress();
  const apiContext = useContext(ApiContext);

  useEffect(() => {
    progressObj.reset();
  }, [event]);

  const handleSubmit = () => {
    if (!event) {
      return progressObj.setError("Tidak ada event terpilih");
    }

    progressObj.startLoad();

    registerForEvent(
      apiContext.axios,
      event.id
    )
      .then(() => {
        progressObj.setSuccess(true);
        mutate();
        closeCb();
      })
      .catch((e) => {
        progressObj.setError(e.message);
      })
      .finally(() => {
        progressObj.setLoading(false);
      });
  };

  return (
    <Modal
      style={modalStyle}
      isOpen={!!event}
      onRequestClose={closeCb}
    >
      <div className="row">
        <div className="col-12">
          <p>Apakah Anda yakin ingin mendaftarkan diri ke {event?.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Alert error={progressObj.error} />
        </div>
      </div>
      <div className="row mt-3">
        {progressObj.loading ?
          <Spinner />
          : <div className="col-12 col-md-6 offset-md-6 d-flex justify-content-end">
            <FilledButton text="Batal" onClick={closeCb} />
            <div className="ml-3" />
            <FilledButton
              text="Daftar"
              color={Theme.buttonColors.purpleButton}
              onClick={handleSubmit} />
          </div>
        }
      </div>
      <style jsx global>{`
        .ReactModal__Overlay {
          opacity: 0;
          transition: opacity 300ms ease-in-out;
        }

        .ReactModal__Overlay--after-open{
          opacity: 1;
        }

        .ReactModal__Overlay--before-close{
          opacity: 0;
        }  
      `}</style>
    </Modal>
  );
};

export default TalksRegisterModal;