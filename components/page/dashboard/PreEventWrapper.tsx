import { useContext, useState } from "react";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { ApiContext } from "utils/context/api";
import Alert from "components/Alert";
import Spinner from "components/Spinner";
import { getPreeventRegistration, LIST_PREEVENT_REGISTRATION_URL } from "api/preevent";
import PreeventSidebar from "components/dashboard/preevent/PreeventSidebar";
import PreeventStageTask from "components/dashboard/preevent/PreeventStageTask";

const PreEventWrapper: React.FC = () => {
  const apiContext = useContext(ApiContext);

  const {
    data: preeventRegistration,
    error: errorPreeventRegistration
  } = useSWR(LIST_PREEVENT_REGISTRATION_URL, () => getPreeventRegistration(apiContext.axios));

  const [selection, setSelection] = useState(0);

  const router = useRouter();

  const { preevent: preeventSlug } = router.query;
  if (!preeventSlug) return null;

  if (errorPreeventRegistration) return <Alert error="Masalah koneksi" />;
  if (!preeventRegistration) return <Spinner height="200px" />;

  const currentPreeventArr = preeventRegistration.filter(entry => entry.preevent.slug === preeventSlug);

  if (currentPreeventArr.length !== 1) {
    return <Alert error="Tautan invalid, pastikan pendaftaran sudah dibuka dan profil sudah lengkap" />;
  }

  const currentRegistration = currentPreeventArr[0];

  const getComponent = () => {
    return <PreeventStageTask registration={currentRegistration} selection={selection} />;
  };

  return (
    <div className="mb-3">
      <div className="row" id="main-content">
        <div className="col-lg-3 col-md-4">
          <PreeventSidebar
            registration={currentRegistration}
            selection={selection}
            setSelection={setSelection}
          />
        </div>
        <div className="col-lg-6 col-md-6 mt-5 mt-md-0">{getComponent()}</div>
      </div>
    </div>
  );
};

export default PreEventWrapper;
