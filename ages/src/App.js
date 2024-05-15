import React from "react";
import PagesRoutes from "./Pages/PagesRoutes";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./componentsAuth0/Loading";

const App = () => {
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  
  return (
      <div className="App">
        <PagesRoutes />
      </div>
    );
  }

export default App;
