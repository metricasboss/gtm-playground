"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("cta").addEventListener("click", function () {
      var toasty = document.getElementById("toasty");
      toasty.classList.remove("hidden", "opacity-0");
      setTimeout(function () {
        toasty.classList.add("opacity-0");
        setTimeout(function () {
          toasty.classList.add("hidden");
        }, 700);
      }, 1000);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex flex-col p-20 border-4 border-dotted border-indigo-500 mt-6 ">
        <button
          id="cta"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Clique aqui para chamar o Goku!
        </button>
        <img
          id="toasty"
          src="https://www.pintarcolorir.com.br/wp-content/uploads/2015/10/Goku-para-colorir-01.png"
          alt="Toasty"
          className="hidden opacity-0 transition-opacity duration-700 fixed bottom-0 right-0 z-50"
          style={{ width: "400px" }}
        />
      </div>
      <div className="flex flex-col p-20 border-4 border-dotted border-indigo-500">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Cadastre-se para ganhar uma esfera do dragão
        </h2>
        <form id="form" action="#">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Primeiro nome
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Segundo nome
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seu melhor e-mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Estou de acordo com todos{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                os termos e condições
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col p-20 border-4 border-dotted border-indigo-500">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Clique para comprar uma semente dos Deuses
        </h2>
        <img
          className="mb-6"
          src="https://pa1.aminoapps.com/6570/633040bea024b4bce82a439ab9b0579a27b5160b_00.gif"
        />
        <button
          id="finalizar"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Finalizar pedido
        </button>
      </div>
    </main>
  );
}
