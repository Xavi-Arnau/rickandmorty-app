import React from "react";

const Character = ({ id, status, image, name, gender, created, onClick }) => {
  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    return `${day}/${month}/${year}`;
  };
  const colorStatus = (status) => {
    if (status === "Alive") {
      return "text-green-500";
    } else if (status === "Dead") {
      return "text-red-500";
    }
  };
  return (
    <div
      className="cursor-pointer hover:scale-105 rounded flex flex-col items-center p-4  rounded-lg bg-veryLightGray md:w-1/6 border-2 border-fluorGreen mb-6"
      onClick={() => onClick(id)}
    >
      <img src={image} alt={name} />
      <h3 className="font-bold">{name}</h3>
      <p className="italic">{gender}</p>
      <p className={colorStatus(status)}>{status}</p>
      <p>{formatDate(new Date(created))}</p>
    </div>
  );
};

export default Character;
