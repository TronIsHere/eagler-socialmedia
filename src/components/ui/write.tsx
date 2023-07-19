import {
  faImage,
  faVideo,
  faSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { FC } from "react";
import { useWrite } from "../../hooks/useWrite";
import AddImageModal from "./modals/addImage";

const WriteComponent: FC = () => {
  const {
    textAreaRef,
    textValue,
    openModal,
    closeModal,
    isEditModalOpen,
    showEmoji,
    addEmoji,
    handleChangeValue,
    toggleShowEmoji,
  } = useWrite();
  return (
    <div className="border-b-2 border-whiteGray  p-5  ">
      <textarea
        ref={textAreaRef}
        value={textValue}
        rows={4}
        onChange={(e) => {
          handleChangeValue(e.target.value);
        }}
        placeholder="Share your thoughts..."
        className="bg-secondary w-full focus:outline-none text-second-accent text-xl "
      />
      <div className="flex mt-8 justify-between">
        <div className="flex ">
          <FontAwesomeIcon
            icon={faImage}
            className="text-low-color-accent cursor-pointer hover:text-white"
            onClick={openModal}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faVideo}
            className="text-low-color-accent cursor-pointer ml-4 hover:text-white"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faSmile}
            className="text-low-color-accent cursor-pointer ml-4 hover:text-white"
            onClick={() => toggleShowEmoji}
          ></FontAwesomeIcon>
          <AddImageModal
            isOpen={isEditModalOpen}
            closeCallBack={closeModal}
          ></AddImageModal>
          <div className="relative ml-2">
            <div className="absolute">
              {showEmoji ? (
                <EmojiPicker
                  onEmojiClick={(emojiData: EmojiClickData) =>
                    addEmoji(emojiData)
                  }
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <button className="bg-red-600 text-white px-3 py-2 rounded-full -mt-4 hover:opacity-50">
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default WriteComponent;
