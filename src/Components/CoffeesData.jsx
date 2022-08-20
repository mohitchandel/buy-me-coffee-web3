import React from "react";

export const CoffeesData = () => {
  const divStyle = {
    background: "#5046e5",
    color: "#fff",
    borderRadius: "12px",
    margin: "10px 10px 0 0",
  };

  const ar = [1, 2, 3, 4];

  return (
    <>
      <div className="pt-4 border-t-2">
        <h2 className="" style={{fontSize: '20px'}}><strong>Recent Donations :</strong></h2>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center justify-start">
              <strong>Name</strong>
            </div>
            <div className="flex items-center justify-center">
              <strong>Message</strong>
            </div>
            <div className="flex items-center justify-end">
              <strong><img src="matic.png" width={80}/></strong>
            </div>
          </div>
        </div>
        {ar.map((i) => {
          return (
            <div className="p-4" style={divStyle}>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center justify-start">Jacl</div>
                <div className="flex items-center justify-center">
                  You are awesome !
                </div>
                <div className="flex items-center justify-end">10 Matic</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
