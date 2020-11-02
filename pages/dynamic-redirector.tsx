import { useRouter } from "next/dist/client/router";

const DynamicRedirector: React.FC = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname;
    router.replace(currentPath);
  }

  return (<></>);
};

export default DynamicRedirector;