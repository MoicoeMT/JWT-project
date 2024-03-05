import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const PrivatePage = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState([]);

  const getPrivate = async () => {
    const resp = await actions.getPrivate();
    if (resp.ok) {
      setData(resp.data);
    }
  };

  useEffect(() => {
    getPrivate();
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center flex-column"
              key={index}
            >
              <p>{item.email}</p>
            </div>
          );
        })
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default PrivatePage;
