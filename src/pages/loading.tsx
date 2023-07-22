import { FC } from "react";

export const LoadingPage: FC = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <span className="loader"></span>
    </div>
  );
};
