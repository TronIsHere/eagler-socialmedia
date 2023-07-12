import { FC } from "react";

interface props {
  gridOneChild: any;
  gridTwoChild: any;
  gridThreeChild: any;
}

export const PageRow: FC<props> = (props) => {
  const { gridOneChild, gridTwoChild, gridThreeChild } = props;
  return (
    <>
      <div className="grid grid-cols-5 w-full">
        <div className="bg-secondary border-r-2 border-whiteGray ">
          <div className="w-full bg-primary h-14 flex">
            <img
              src="eagleLogo.png"
              alt=""
              className="object-fill logoContainer pl-10"
            />
          </div>
          {gridOneChild}
        </div>
        <div className="bg-secondary border-r-2 border-whiteGray col-span-3">
          {gridTwoChild}
        </div>
        <div className="bg-secondary border-whiteGray ">
          <div className="w-full bg-primary h-14 flex">
            <div className="p-2 pl-5 flex cursor-pointer">
              <img
                src="https://placehold.co/500x500?text=Avatar"
                className="avatar-xsmall rounded-full"
                alt=""
              />
              <span className="text-white mt-2 ml-3">Erwin aghajani</span>
              {gridThreeChild}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
