import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { DynamicRoute } from "../utils/constants/dynamic-route";
import { AuthContext } from "../utils/context/auth";

const DynamicRedirector: React.FC = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname;
    const isSecure = DynamicRoute.some((entry) => {
      return currentPath.startsWith(entry.url) && entry.secure;
    });

    if (isSecure && !authContext.authenticated) {
      router.replace(`/login?continue=${currentPath}`);
    } else {
      router.replace(currentPath);
    }
  }

  return (<></>);
};

export default DynamicRedirector;