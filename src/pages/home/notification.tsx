import { faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { NotificationItem } from "../../components/ui/notificationItem";

export const NotificationPage: FC = () => {
  return (
    <>
      <div className="w-full bg-primary h-14 flex"></div>
      <NotificationItem icon={faBell} name="Erwin Aghajani"></NotificationItem>
      <NotificationItem
        icon={faMessage}
        badgeColor="bg-blue-600"
        name="Mohammad Sohrabian"
      ></NotificationItem>
    </>
  );
};
