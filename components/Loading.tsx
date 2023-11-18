import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col justify-center">
      <img alt="Loading" src="/loading.gif" className="w-[100px]" />
      <div>Budget tracker loading...please wait.</div>
    </div>
  );
};

export default Loading;
