import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useEffect, useState } from "react";

interface showImageProps {
  imgSrc: string;
  OpenModal: boolean;
  onCloseCallback: () => void;
}

const showImage: FC<showImageProps> = ({
  imgSrc,
  OpenModal,
  onCloseCallback,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Transition appear show={OpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onCloseCallback}>
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

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="w-full flex justify-end">
                    <div className="relative">
                      <div
                        className="absolute h-8 w-8 text-center bg-black left-3 top-3 cursor-pointer rounded-full"
                        onClick={onCloseCallback}
                      >
                        <FontAwesomeIcon
                          icon={faX}
                          className="mt-2 text-white"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                    <img src={imgSrc} alt="" className="rounded-2xl" />
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

export default showImage;
