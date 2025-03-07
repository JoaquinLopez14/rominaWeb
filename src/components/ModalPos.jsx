import { Link, useNavigate } from "react-router-dom";
import love from "../assets/love.png";

function ModalPos({ onClose, setIsModalPosOpen }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    setIsModalPosOpen(false); // Cierra el modal
    navigate("/home"); // Navega a /home
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h1 className="text-xl font-semibold">¡Sabía que lo amabas!</h1>
        <img src={love} className="p-10 w-80" />
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ❌
        </button>
        <h1>Podemos seguir con su sorpresa</h1>
        <Link to = "/home"><button onClick={handleNavigate} className="bg-black text-white p-2 mt-5 rounded-xl w-32">
          ¡Vamos!
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ModalPos;