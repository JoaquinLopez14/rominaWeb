import React, { useState } from "react";
import ModalPos from "./ModalPos";

function Modal({ isOpen, onClose, message, onNoClick, image }) {
  const [isModalPosOpen, setIsModalPosOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ❌
        </button>
        <img src={image} className="w-32 m-auto" alt="Imagen" />
        <h2 className="text-lg font-semibold">{message}</h2>
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            className="w-32 text-black border-2 border-black p-2 rounded-2xl active:bg-green-700"
            onClick={() => setIsModalPosOpen(true)}
          >
            Si, lo amo
          </button>
          <button
            className="w-32 text-black border-2 border-black p-2 rounded-2xl active:bg-red-700"
            onClick={onNoClick}
          >
            No lo amo
          </button>
        </div>
      </div>
      {isModalPosOpen && <ModalPos onClose={() => setIsModalPosOpen(false)} />}
    </div>
  );
}

export default Modal;
