import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
import { useAppDispatch } from "../../../hooks/useRedux";
import { updateWebsite } from "../../../state/slices/userSlice";
interface props {
  isOpen: boolean;
  closeCallBack: () => void;
}

const EditModal: FC<props> = ({ isOpen, closeCallBack }) => {
  const dispatch = useAppDispatch();
  //TODO: gotta change this to more useable comprehensive function not only for website
  const [websiteState, setWebsiteState] = useState<string>("");
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-center cursor-pointer"
                  >
                    <img
                      src="https://placehold.co/500x500?text=Avatar"
                      className="rounded-full"
                      width={85}
                      alt=""
                    />
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <p className="mt-5">Name</p>
                      <input
                        type="text"
                        className="border-gray-400 rounded-sm border-2 w-full h-8 mt-2 pl-2"
                      />
                      <p className="mt-5">Website</p>
                      <input
                        type="text"
                        className="border-gray-400 rounded-sm border-2 w-full h-8 mt-2 pl-2"
                        onChange={(e) => {
                          setWebsiteState(e.target.value);
                        }}
                      />
                      <p className="mt-5">Link</p>
                      <input
                        type="text"
                        className="border-gray-400 rounded-sm border-2 w-full h-8 mt-2 pl-2"
                      />
                      <p className="mt-5">user id</p>
                      <input
                        type="text"
                        className="border-gray-400 rounded-sm border-2 w-full h-8 mt-2 pl-2"
                      />
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-5"
                      onClick={() => {
                        dispatch(updateWebsite(websiteState));
                      }}
                    >
                      Edit
                    </button>
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
