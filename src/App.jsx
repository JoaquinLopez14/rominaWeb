import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Finish from './Finish'
import FadeIn from './components/FadeIn'
import ModalPos from './components/ModalPos'
import bgImage from "/bg.png"
import Modal from "./components/Modal"
import img1 from "./assets/angry.png"
import img2 from "./assets/sad.gif"
import img3 from "./assets/sad.png"
import img4 from "./assets/sad2.png"
import img5 from "./assets/sad3.png"
import img6 from "./assets/sad5.gif"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [imageIndex, setImagenIndex] = useState(0);
  const [isModalPosOpen, setIsModalPosOpen] = useState(false);

  const location = useLocation();

  const messages = [
    "¿Segura?",
    "Sé que es difícil darle al 'sí', vos podés",
    "En serio, clickeá 'sí', Joaquín no preparó nada para esta opción",
    "No va a pasar nada, solo se repetirán los mensajes",
    "No hay nada más",
    "O quizás sí",
    "La verdad que no, clickeá 'sí'"
  ];

  const images = [img1, img2, img3, img4, img5, img6];

  const handleNoClick = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setImagenIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      {location.pathname !== "/home" && location.pathname !== "/finish" && (
        <div
          className="w-screen h-screen text-center flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${bgImage})`, backgroundColor: `#200066` }}
        >
          <FadeIn delay={0.5}>
            <div className="w-screen text-center p-10 font-secundary">
              <h1 className="text-white text-2xl">Joaquín te preparó algo</h1>
              <h1 className="text-white text-2xl">Usando sus conocimientos de nerd 🤓</h1>
            </div>
          </FadeIn>

          <FadeIn delay={2}>
            <div className="w-screen text-center p-10 font-secundary">
              <h2 className="text-white text-2xl mb-5">¿Querés saber más sobre ustedes?</h2>
              <h2 className="text-white text-xl">Algunas cosas te pueden sorprender</h2>
            </div>
          </FadeIn>

          <FadeIn delay={5}>
            <div className="w-screen text-center p-10 font-secundary border-2 border-white">
              <h2 className="text-white text-2xl">Primero necesito saber si lo amás...</h2>
              <h2 className="text-white text-xl">Elegí sabiamente</h2>
              <div>
                <div className="mt-5 flex items-center justify-center gap-5">
                  <button
                    className="border-2 border-white p-1 text-black bg-white w-28"
                    onClick={() => setIsModalPosOpen(true)}
                  >
                    Sí, lo amo
                  </button>
                  <button
                    className="border-2 border-white p-1 text-black bg-white w-28"
                    onClick={() => setIsModalOpen(true)}
                  >
                    No lo amo
                  </button>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    message={messages[messageIndex]}
                    image={images[imageIndex]}
                    onNoClick={handleNoClick}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      )}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/finish" element={<Finish/>} />
      </Routes>
      {isModalPosOpen && <ModalPos onClose={() => setIsModalPosOpen(false)} setIsModalPosOpen={setIsModalPosOpen} />}
      </>
  );
}

export default App;
