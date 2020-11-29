import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import useSWR from "swr";
import Spinner from "components/Spinner";
import useProgress from "utils/hooks/useProgress";
import Alert from "components/Alert";
import { getPreevent, LIST_PREEVENT_URL, registerPreevent } from "api/preevent";
import { ApiContext } from "utils/context/api";
import { PreeventRegisterStatus } from "interfaces/preevent";

const PreEventRegistrationPage: React.FC = () => {
  const router = useRouter();
  const apiContext = useContext(ApiContext);

  const progressObj = useProgress();

  const {
    data: preevent,
    error: errorPreevent,
  } = useSWR(LIST_PREEVENT_URL, () => getPreevent(apiContext.axios));

  const { preevent: preeventSlug } = router.query;

  useEffect(() => {
    if (!preevent) return;

    const currentPreevent = preevent.filter(entry => entry.slug === preeventSlug);

    if (currentPreevent.length === 1) {
      progressObj.reset();
      progressObj.startLoad();

      registerPreevent(apiContext.axios, currentPreevent[0].id)
        .then(() => {
          router.push(`/dashboard/pre-events/${preeventSlug}`);
        }).catch(err => {
          if (err.code === PreeventRegisterStatus.CLOSED) {
            return progressObj.setError("Pendaftaran ditutup");
          }
          progressObj.setError(err.message);
        }).finally(() => {
          progressObj.setLoading(false);
        });
    } else {
      progressObj.setError("Tautan invalid");
    }

  }, [preevent]);

  if (errorPreevent) return <Alert error="Masalah koneksi" />;
  if (!preevent) return <Spinner />;

  if (progressObj.loading) {
    return (<Spinner />);
  } else {
    return (<Alert error={progressObj.error} closable={false} />);
  }
};

export default PreEventRegistrationPage;