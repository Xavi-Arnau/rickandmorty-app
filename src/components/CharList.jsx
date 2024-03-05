import React from "react";
import Character from "./Character";

const CharList = ({ characters, onClick }) => {
  return (
    <section id="characters">
      <div className="max-w-6xl px-5 mx-auto mt-10 text-center">
        <div className="flex flex-col mt-24 md:flex-row  justify-between flex-wrap gap-x-px">
          {characters.map((character) => (
            <Character
              key={character.id}
              id={character.id}
              status={character.status}
              image={character.image}
              name={character.name}
              gender={character.gender}
              created={character.created}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharList;
