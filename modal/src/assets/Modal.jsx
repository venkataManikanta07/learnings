import React from "react";
import { X, Download } from "lucide-react";
import { useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      console.log(`Target Values: ${modalRef.current}, ${e.target}`);
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={(e) => closeModal(e)}
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="flex flex-col mt-3">
        <X
          onClick={onClose}
          className="place-self-end hover:cursor-pointer"
          size={36}
        />
        <div className="flex flex-col items-center justify-center bg-purple-500 p-6 rounded-md text-white">
          <h2 className="text-3xl font-bold">Download Amazon E Book</h2>
          <p className="text-xl max-w-md mt-3">
            Want to learn how to crack web development like a pro.
          </p>
          <form className="flex flex-col items-center justify-center">
            <input
              className="rounded-md p-3 w-48 text-black"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className="flex items-center justify-center w-40 rounded-md mt-3  bg-green-700 p-3">
              <Download /> Download
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
