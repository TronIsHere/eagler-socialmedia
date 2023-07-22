import { FC, ReactNode } from "react";

interface props {
  title: string;
  form: ReactNode;
  buttons: ReactNode;
}

export const AuthLayout: FC<props> = (props) => {
  const { form, title, buttons } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-white">
      <div className="flex justify-center items-center h-screen  ">
        <div className="flex-col w-3/4   ">
          <h1 className="text-4xl font-bold">{title}</h1>
          {form}
          <div className="grid grid-cols-5 mt-12">
            <div className="w-full h-1 bg-slightGray col-span-2"></div>
            <div className="w-full h-1 flex justify-center items-center">
              <span className="text-lg">or</span>
            </div>
            <div className="w-full h-1 bg-slightGray col-span-2"></div>
          </div>
          {buttons}
        </div>
      </div>
      <div className="w-full h-screen side-login"></div>
    </div>
  );
};
