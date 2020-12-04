import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import useSWR from "swr";
import Spinner from "components/Spinner";
import useProgress from "utils/hooks/useProgress";
import Alert from "components/Alert";
import { getPreevent, getPreeventRegistration, LIST_PREEVENT_REGISTRATION_URL, LIST_PREEVENT_URL, registerPreevent } from "api/preevent";
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

  const {
    data: registration,
    error: errorRegistration,
    mutate: registrationMutation
  } = useSWR(LIST_PREEVENT_REGISTRATION_URL, () => getPreeventRegistration(apiContext.axios));

  const { preevent: preeventSlug } = router.query;

  useEffect(() => {
    if (!(preevent && registration)) return;

    const currentPreevent = preevent.filter(entry => entry.slug === preeventSlug);

    if (currentPreevent.length === 1) {
      progressObj.reset();
      progressObj.startLoad();

      registerPreevent(apiContext.axios, currentPreevent[0].id)
        .then((data) => {
          registrationMutation([...registration, data]);
          router.push(`/dashboard/pre-events/${preeventSlug}`);
        }).catch(err => {
          if (err.code === PreeventRegisterStatus.CLOSED) {
            progressObj.setError("Pendaftaran ditutup");
            return;
          } else if (err.code === PreeventRegisterStatus.ALREADY_REGISTERED) {
            router.push(`/dashboard/pre-events/${preeventSlug}`);
            return;
          }
          progressObj.setError(err.message);
        }).finally(() => {
          progressObj.setLoading(false);
        });
    } else {
      progressObj.setError("Tautan invalid");
    }

  }, [preevent, registration]);

  if (errorPreevent || errorRegistration) return <Alert error="Masalah koneksi" />;
  if (!(preevent && registration)) return <Spinner />;

  if (progressObj.loading) {
    return (<Spinner />);
  } else {
    return (<Alert error={progressObj.error} closable={false} />);
  }
};

export default PreEventRegistrationPage;