import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops!!!</h1>
      <h2 style={{ color: "red" }}>{err?.status + " - " + err?.statusText}</h2>
      <h3>{err?.data}</h3>
    </div>
  );
};

export default Error;
