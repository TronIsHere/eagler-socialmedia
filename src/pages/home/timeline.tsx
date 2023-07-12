import { FC } from "react";
import UserWroteColumn from "../../components/ui/userWrote";
import WriteComponent from "../../components/ui/write";

const TimelinePage: FC = () => {
  return (
    <>
      <div className="w-full bg-primary h-14 flex"></div>
      <WriteComponent></WriteComponent>
      <div className="">
        <UserWroteColumn></UserWroteColumn>
        <UserWroteColumn hasReplies={true}></UserWroteColumn>
        <UserWroteColumn hasReplies={true}></UserWroteColumn>
      </div>
    </>
  );
};
export default TimelinePage;
