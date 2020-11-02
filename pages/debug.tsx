import { useContext, useState } from "react";
import FilledButton from "../components/FilledButton";
import { ApiContext } from "../utils/context/api";
import { AuthContext } from "../utils/context/auth";

const Debug: React.FC = () => {
  if (process.env.NODE_ENV === "production") {
    return <p>Restricted</p>;
  }

  const authContext = useContext(AuthContext);
  const apiContext = useContext(ApiContext);

  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Debug page</h1>
      <p>API Url: {process.env.API_BASE_URL}</p>
      <h2>Auth State</h2>
      <p>authenticated: {authContext.authenticated ? "true" : "false"}</p>
      <p>auth: {JSON.stringify(authContext.auth)}</p>
      <h2>Request result</h2>
      <p>{result}</p>
      <h2>Action</h2>
      <form>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
      </form>
      <br />
      <FilledButton
        text="login/logout"
        onClick={() => {
          if (!authContext.authenticated) {
            apiContext.axios
              .post("/auth/login/", {
                email,
                password,
              })
              .then((data) => {
                authContext.setAuthenticated(true);
                authContext.setAuth(data.data);
              })
              .catch((err) => {
                setResult(JSON.stringify(err.response));
              });
          } else {
            authContext.setAuthenticated(!authContext.authenticated);
            authContext.setAuth();
          }
        }}
      />
      <br />
      <br />
      <FilledButton
        text="fetch session"
        onClick={() => {
          apiContext.axios
            .get("/auth")
            .then((data) => {
              setResult(JSON.stringify(data));
            })
            .catch((err) => {
              setResult(JSON.stringify(err.response));
            });
        }}
      />
    </>
  );
};

export default Debug;
