import {
  faImage,
  faVideo,
  faSmile,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { FC, useContext, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { useWrite } from "../../hooks/useWrite";
import { writeSelector } from "../../state/slices/writeSlice";
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
    uploadCallBack,
    imageUrlRef,
    submitWrite,
  } = useWrite();
  const { imageUrl } = useAppSelector(writeSelector);
  const [showImageinWrite, setShowImageinWrite] = useState<boolean>(false);
  useEffect(() => {
    if (imageUrl.length > 3) {
      setShowImageinWrite(true);
    } else {
      setShowImageinWrite(false);
    }
  }, [imageUrl]);
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
      {/* <ReactQuill
        className="text-white"
        value={textValue}
        onChange={handleChangeValue}
      /> */}
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
          {/* TODO: when click outside it won't vanish */}
          <FontAwesomeIcon
            icon={faSmile}
            className="text-low-color-accent cursor-pointer ml-4 hover:text-white"
            onClick={toggleShowEmoji}
          ></FontAwesomeIcon>
          <AddImageModal
            uploadCallBack={uploadCallBack}
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
        <button
          className="bg-red-600 text-white px-3 py-2 rounded-full -mt-4 hover:opacity-50"
          onClick={submitWrite}
        >
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </button>
      </div>
      {showImageinWrite ? (
        <img
          className="mt-10 rounded-lg cursor-pointer"
          src={imageUrlRef.current}
          alt=""
          width={300}
        />
      ) : null}
    </div>
  );
};

export default WriteComponent;
