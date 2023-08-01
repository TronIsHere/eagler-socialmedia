import { useEffect, useState } from "react";
import { userSelector } from "../state/slices/userSlice";
import { useAppSelector } from "./useRedux";
import { useAppDispatch } from "./useRedux";
export const useProfile = () => {
  let [isEditModalOpen, setEditModalOpen] = useState(false);
  const userData = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    setEditModalOpen(false);
  };
  const openModal = () => {
    setEditModalOpen(true);
  };
  useEffect(() => {}, []);
  return {
    isEditModalOpen,
    closeModal,
    openModal,
    userData,
  };
};
