import {
  faCalendarAlt,
  faEllipsis,
  faLink,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditModal from "../../components/ui/modals/editUser";
import UserWroteColumn from "../../components/ui/userWrote";
import { useProfile } from "../../hooks/useProfile";

const ProfilePage = () => {
  const { closeModal, openModal, isEditModalOpen } = useProfile();
  return (
    <>
      <div className="w-full bg-primary h-14 flex"></div>
      <section>
        <div className="border-b-2 border-whiteGray pb-10">
          <div className="w-full bg-red-500 h-52 block"></div>
          <div className="rounded-full  -mt-20 flex justify-center">
            <img
              src="https://placehold.co/500x500?text=Avatar"
              alt=""
              width={145}
              className="rounded-full"
            />
          </div>
          <div className="flex justify-center  items-center flex-col">
            <p className="text-low-color-accent mt-4 cursor-pointer hover:text-accent">
              @feranki
            </p>
            <span className="text-white mt-2 text-2xl font-bold">
              Erwin Aghajani
            </span>
          </div>
          <div className="flex justify-center">
            <p className="text-low-color-accent mt-4 ">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="mr-2"
              ></FontAwesomeIcon>
              Joined since july 2023
            </p>
            <p className="mt-4 ml-10 text-links hover:underline">
              <FontAwesomeIcon icon={faLink} className="mr-2"></FontAwesomeIcon>
              whitediv.com
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex text-white border-gray-600 border-2 p-2 px-5 rounded-lg mr-5 cursor-pointer">
              <FontAwesomeIcon
                icon={faUser}
                className="mt-1 mr-2"
              ></FontAwesomeIcon>
              <span className="">Follow</span>
            </div>
            <div className="flex text-white border-gray-600 border-2 p-2 px-5 rounded-lg cursor-pointer">
              <FontAwesomeIcon
                icon={faEllipsis}
                className="mt-1 mr-2"
              ></FontAwesomeIcon>
              <span className="">More</span>
            </div>
            <div
              className="flex text-white border-gray-600 border-2 p-2 px-5 rounded-lg ml-5 cursor-pointer"
              onClick={openModal}
            >
              <FontAwesomeIcon
                icon={faPen}
                className="mt-1 mr-2"
              ></FontAwesomeIcon>
              <span className="">Edit</span>
            </div>
            <EditModal
              isOpen={isEditModalOpen}
              closeCallBack={closeModal}
            ></EditModal>
          </div>
        </div>
        <div className="personal-eagles h-screen">
          <UserWroteColumn></UserWroteColumn>
          <UserWroteColumn></UserWroteColumn>
          <UserWroteColumn></UserWroteColumn>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
