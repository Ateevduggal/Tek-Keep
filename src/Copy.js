import React from "react";

const Copy = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <p className="text-center fw-bold fixed-bottom">
            copyright &copy; {year} - TEK KEEP
          </p>
        </div>
      </div>
    </>
  );
};

export default Copy;
