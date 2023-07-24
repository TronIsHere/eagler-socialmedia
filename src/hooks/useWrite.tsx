import { EmojiClickData } from "emoji-picker-react/dist/types/exposedTypes";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { addPost } from "../state/slices/postSlice";
import { useAppDispatch } from "./useRedux";

export const useWrite = () => {
  const [textValue, changeTextValue] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  let [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
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
    console.log("object");
    setShowEmoji(!showEmoji);
  };
  const submitWrite = () => {
    let newPost = {
      likes: 0,
      user: {
        name: "reza jj",
        id: "rzJJ21",
        avatar: "https://placehold.co/500x500?text=Reza",
      },
      comments: 0,
      shared: 0,
      content: textValue,
    };
    if (textValue != "") {
      dispatch(addPost(newPost));
      toast.success("posted a new Eagle");
      setShowEmoji(false);
      changeTextValue("");
    }
  };

  return {
    submitWrite,
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
