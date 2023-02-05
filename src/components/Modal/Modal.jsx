import React from "react";

const Modal = ({ data, id, closeModal }) => {
  console.log(id);
  console.log("Data:", data);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 gap-4 absolute w-[37.25rem] h-[35.625rem]left-[26.4rem] top-[14.5rem] bg-white gray-200">
      <h1>HELLO MODAL SCREEN İS ACTİVE</h1>
      <h1>Siparişinizin özeti</h1>
      <p>{data.title}</p>
      <p>{data.features.id}</p>

      <div className="bg-red text-red">
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
