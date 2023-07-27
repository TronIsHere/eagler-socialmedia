import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import { MyDropzone } from "../../utils/dropImage";

// TODO: will refactor this part to separate file

interface props {
  isOpen: boolean;
  closeCallBack: () => void;
  uploadCallBack: () => void;
}

const EditModal: FC<props> = ({ isOpen, closeCallBack, uploadCallBack }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeCallBack}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  bg-white  text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="div"
                    className="flex justify-center cursor-pointer"
                  ></Dialog.Title> */}
                  <div className="">
                    <MyDropzone uploadCallBack={uploadCallBack}></MyDropzone>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default EditModal;
