import { EmojiClickData } from "emoji-picker-react/dist/types/exposedTypes";
import { useRef, useState } from "react";

export const useWrite = () => {
  const [textValue, changeTextValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  let [isEditModalOpen, setEditModalOpen] = useState(false);

  const closeModal = () => {
    setEditModalOpen(false);
  };
  const openModal = () => {
    setEditModalOpen(true);
  };
  const addEmoji = (emojiData: EmojiClickData) => {
    changeTextValue((prevState) => `${prevState} ${emojiData.emoji}`);
  };
  const handleChangeValue = (value: string) => {
    changeTextValue(value);
  };
  const toggleShowEmoji = () => {
    setShowEmoji(!showEmoji);
  };

  return {
    closeModal,
    openModal,
    addEmoji,
    toggleShowEmoji,
    handleChangeValue,
    textValue,
    showEmoji,
    textAreaRef,
    isEditModalOpen,
  };
};
