import { useState } from "react";

export const useProfile = () => {
  let [isEditModalOpen, setEditModalOpen] = useState(false);
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
  };
};
