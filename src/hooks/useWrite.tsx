import { EmojiClickData } from "emoji-picker-react/dist/types/exposedTypes";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

import { DateTime } from "luxon";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import PostModel from "../models/post";
import { storage } from "../services/firebase";
import { addPost } from "../state/slices/postSlice";
import { useAppDispatch } from "./useRedux";

export const useWrite = () => {
  const [textValue, changeTextValue] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [imageUploadLoading, setImageUploadLoading] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string>("");
  const postRef = useRef<PostModel | null>();
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
  const uploadCallBack = (acceptedFiles: any) => {
    setImageUploadLoading(true);
    const imageRef = ref(storage, `images/${acceptedFiles[0].name}`);

    uploadBytes(imageRef, acceptedFiles[0]).then(() => {
      toast.success("image uploaded");
      closeModal();
      setImagePath(imageRef.name);
    });
  };
  const toggleShowEmoji = () => {
    setShowEmoji(!showEmoji);
  };
  const submitWrite = async () => {
    if (imagePath != "") {
      // debugger;
      console.log(textValue, 1);
      await listAll(ref(storage, "images/")).then((response) => {
        response.items.forEach((item) => {
          if (item.name == imagePath) {
            return getDownloadURL(item).then((url) => {
              //TODO: needs for a lot of refactor duplicated code

              // newImage = url;
              postRef.current = {
                likes: 0,
                user: {
                  name: "reza jj",
                  id: "rzJJ21",
                  avatar: "https://placehold.co/500x500?text=Reza",
                  email: "",
                  posts: [],
                },
                date: DateTime.now().toISODate()!,
                comments: 0,
                shared: 0,
                content: textValue,
                image: url,
              };
              if (textValue != "") {
                console.log(postRef.current, 3);
                dispatch(addPost(postRef.current));
                toast.success("posted a new Eagle");
                setShowEmoji(false);
                changeTextValue("");
                // console.log(newPost);
              }
            });
          }
        });
      });
    } else {
      if (textValue != "") {
        postRef.current = {
          likes: 0,
          user: {
            name: "reza jj",
            id: "rzJJ21",
            avatar: "https://placehold.co/500x500?text=Reza",
            email: "",
            posts: [],
          },
          date: DateTime.now().toISODate()!,
          comments: 0,
          shared: 0,
          content: textValue,
        };
        // console.log(postRef.current, 4);
        dispatch(addPost(postRef.current as PostModel));
        toast.success("posted a new Eagle");
        setShowEmoji(false);
        changeTextValue("");
        // console.log(newPost);
      }
    }
    // let newPost = {
    //   likes: 0,
    //   user: {
    //     name: "reza jj",
    //     id: "rzJJ21",
    //     avatar: "https://placehold.co/500x500?text=Reza",
    //     email: "",
    //     posts: [],
    //   },
    //   date: DateTime.now().toISODate()!,
    //   comments: 0,
    //   shared: 0,
    //   content: textValue,
    //   image: newImage,
    // };
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
    uploadCallBack,
    imageUploadLoading,
    setImageUploadLoading,
  };
};
