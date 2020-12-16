import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../utils/context/auth";
import Spinner from "components/Spinner";

const MediatedLogin: React.FC = () => {

  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("fromToken");

    if (!token) return;
    if (authContext.auth?.token !== token) {
      authContext.setAuth({
        user: {
          fullName: "mediated login",
          email: "mediated@arkavidia.id",
          address: "address",
          birthDate: "birthDate",
          currentEducation: "Kuliah",
          institution: "ITB",
          phoneNumber: "12312",
          dateJoined: "2020-11-05T19:04:15+07:00"
        },
        exp: 9999999999999999,
        token
      });
      authContext.setAuthenticated(true);

      router.push("/");
    }
  }, []);

  return (
    <Spinner />
  );
};

export default MediatedLogin;
