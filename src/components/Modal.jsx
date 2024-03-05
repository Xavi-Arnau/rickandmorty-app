import React from "react";
import { X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { formatDate } from "../helper";

const Modal = ({ id, onClose }) => {
  const [character, setCharacter] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const api = "https://rickandmortyapi.com/api/character/" + id;
      const response = await fetch(api);
      const data = await response.json();

      console.log(data);
      setCharacter(data);
    };

    fetchData();
  }, [id]);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-70 backgrop-blur-sm flex justify-center"
    >
      <div className="h-3/4 items-center mt-20 flex flex-col gap-5 text-white bg-zinc-900 px-10 py-4 rounded-2xl md:h-2/5 md:w-1/3">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="flex flex-col gap-10 md:flex-row justify-center">
          <div>
            <img
              src={character.image}
              alt={character.name}
              className="rounded h-3/4"
            />
          </div>
          <div>
            <h2 className="text-2xl mb-3">{character.name}</h2>
            <p>
              <span className="text-fluorGreen p-2">Gender: </span>
              {character.gender}
            </p>
            <p>
              <span className="text-fluorGreen p-2">Species: </span>
              {character.species}
            </p>
            <p>
              <span className="text-fluorGreen p-2">Origin: </span>
              {character ? character.origin.name : ""}
            </p>
            <p>
              <span className="text-fluorGreen p-2">Status: </span>
              {character.status}
            </p>
            <p>
              <span className="text-fluorGreen p-2">Created: </span>
              {formatDate(new Date(character.created))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
