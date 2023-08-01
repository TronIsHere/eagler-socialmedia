import { EmojiClickData } from "emoji-picker-react/dist/types/exposedTypes";
import {
  getDownloadURL,
  listAll,
  ref,
  StorageReference,
  uploadBytes,
} from "firebase/storage";

import { DateTime } from "luxon";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import PostModel from "../models/post";
import { storage } from "../services/firebase";
import { addPost } from "../state/slices/postSlice";
import { updateImageUrl } from "../state/slices/writeSlice";
import { useAppDispatch } from "./useRedux";

export const useWrite = () => {
  const [textValue, changeTextValue] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [imageUploadLoading, setImageUploadLoading] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string>("");
  let [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  let imageUrlRef = useRef<string>("");
  const postRef = useRef<PostModel | null>();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  let imageRef: StorageReference;

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
  const uploadCallBack = async (acceptedFiles: any) => {
    setImageUploadLoading(true);
    imageRef = ref(storage, `images/${acceptedFiles[0].name}`);

    uploadBytes(imageRef, acceptedFiles[0]).then(async () => {
      toast.success("image uploaded");
      closeModal();
      setImagePath(imageRef.name);
      await getImageUrl(imageRef.name);
    });
  };
  const toggleShowEmoji = () => {
    setShowEmoji(!showEmoji);
  };
  const getImageUrl = async (name: string) => {
    await listAll(ref(storage, "images/")).then((response) => {
      response.items.forEach((item) => {
        if (item.name == name) {
          getDownloadURL(item).then((url: string) => {
            dispatch(updateImageUrl(url));
            return (imageUrlRef.current = url);
          });
        }
      });
    });
  };
  const submitWrite = async () => {
    postRef.current = {
      likes: 0,
      user: {
        name: "reza jj",
        id: "rzJJ21",
        avatar: "https://placehold.co/500x500?text=Reza",
        email: "",
        posts: [],
        createdAt: "",
      },
      date: DateTime.now().toISODate()!,
      comments: 0,
      shared: 0,
      content: textValue,
    };
    if (imagePath != "") {
      await listAll(ref(storage, "images/")).then((response) => {
        response.items.forEach((item) => {
          if (item.name == imagePath) {
            return getDownloadURL(item).then((url) => {
              //TODO: needs refactor :  duplicated code
              postRef.current!.image = url;
              if (textValue != "") {
                dispatch(addPost(postRef.current!));
                toast.success("posted a new Eagle");
                setShowEmoji(false);
                changeTextValue("");
                setImagePath("");
                dispatch(updateImageUrl(""));
                // console.log(newPost);
              }
            });
          }
        });
      });
    } else {
      if (textValue != "") {
        dispatch(addPost(postRef.current as PostModel));
        toast.success("Posted a new Eagle");
        setShowEmoji(false);
        changeTextValue("");
      } else {
        toast.error("Please write something");
      }
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
    uploadCallBack,
    imageUploadLoading,
    setImageUploadLoading,
    imageUrlRef,
    imagePath,
    postRef,
    setShowEmoji,
    changeTextValue,
  };
};
