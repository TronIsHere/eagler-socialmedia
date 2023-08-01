import { useEffect, useState } from "react";
import { userSelector } from "../state/slices/userSlice";
import { useAppSelector } from "./useRedux";
import { useAppDispatch } from "./useRedux";
export const useProfile = () => {
  let [isEditModalOpen, setEditModalOpen] = useState(false);
  const userData = useAppSelector(userSelector);
  const closeModal = () => {
    setEditModalOpen(false);
  };
  const openModal = () => {
    setEditModalOpen(true);
  };
  return {
    isEditModalOpen,
    closeModal,
    openModal,
    userData,
  };
};
