/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import DataFetch from "../config/DataFetch";

export const userData = React.createContext(null);
export const userDataUpdater = React.createContext(null);

export default function UserContext({ children }) {
  const [state, setState] = React.useState(null);

  const dataUpdater = () => {
    DataFetch()
      .then((val) => setState(val))
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    dataUpdater();
  }, []);

  return (
    <>
      <userData.Provider value={state}>
        <userDataUpdater.Provider value={dataUpdater}>
          {children}
        </userDataUpdater.Provider>
      </userData.Provider>
    </>
  );
}