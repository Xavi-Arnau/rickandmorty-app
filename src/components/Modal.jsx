import React from "react";
import { X } from "lucide-react";
import { useRef, useEffect, useState } from "react";

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
  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return `${day}/${month}/${year}`;
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-70 backgrop-blur-sm flex justify-center"
    >
      <div className="mt-20 flex flex-col gap-5 text-white w-2/5 bg-slate-800 px-10 py-4 h-2/5 rounded-2xl">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="flex gap-6">
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
