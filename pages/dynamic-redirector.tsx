import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { AuthContext } from "../utils/context/auth";

const DynamicRedirector: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/dashboard') && !authContext.authenticated) {
      router.replace('/login?continue=/dashboard');
    } else {
      router.replace(currentPath);
    }
  }

  return (<></>);
};

export default DynamicRedirector;