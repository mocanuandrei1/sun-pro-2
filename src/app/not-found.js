import Button from "@/components/custom ui/Button";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col mx-10 justify-center items-center">
      <h1 className="text-7xl mb-4">404</h1>
      <h2 className="text-3xl mb-2">Pagina nu a fost gasita.</h2>
      <p className="text-xl mb-4">
        Ne pare rau, dar pagina pe care o cauti nu exista.
      </p>
      <Button
        type="link"
        href="/"
        text="Inapoi la pagina principala"
        customClass="mt-10 lg:mt-4 w-full sm:w-[290px] grid-about-6 "
        mainColor="orange"
        secondColor="blue"
      />
    </div>
  );
};

export default NotFound;
