import React from "react";

export default function Button({ styles }) {

  const book = () => {
    alert('Позвоните нам по номеру: +998 (90) 512-84-44')
  }

  return (
    <button onClick={book} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Связаться
    </button>
  )

}