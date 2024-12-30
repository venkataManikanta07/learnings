import { useState } from "react";
import "./App.css";
import Modal from "./assets/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <div className="h-screen flex flex-col items-center text-center">
        <h2 className="text-3xl text-blue-900 font-bold mt-5">POP Up MODAL</h2>
        <p className="text-2xl text-black font-semibold mt-2">
          This is the Sample Popup modal usage
        </p>
        <button
          onClick={() => setModalVisible(true)}
          className="bg-violet-700 text-white border rounded-md py-2 px-4 my-3"
        >
          Get Modal
        </button>
      </div>
      {modalVisible && <Modal onClose = {() => setModalVisible(false)}/>}
    </>
  );
}

export default App;
