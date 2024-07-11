"use client";
import { useState } from "react";

export default function FormTest() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getAnalyticsData = () => {
    const cookieName = "_ga_YVXB3EG0W3";
    let sessionId = null;
    const regex = new RegExp(`${cookieName}=GS(\\d)\\.(\\d)\\.(\\w+)\\.(\\d+)`);
    const match = document.cookie.match(regex);

    if (match) {
      sessionId = match[3];
    }
    return {
      clientId: window.gaGlobal.vid,
      sessionId,
    };
  };

  const handleGenerateLead = (e) => {
    e.preventDefault();
    const { clientId, sessionId } = getAnalyticsData();
    console.log(clientId, sessionId);
    fetch("/api/lead/hubspot", {
      method: "POST",
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        phone: "+5521989321236",
        clientId,
        sessionId,
      }),
    });

    dataLayer.push({
      event: "generate_lead",
      user_data: {
        email,
        firstName,
        lastName,
        phone: "+5521989321234",
      },
    });
  };

  return (
    <div className="max-w-xl ml-12">
      <h2 className="text-4xl leading-tight tracking-tight font-extrabold text-gray-900 dark:text-gray-50 js-toc-ignore">
        Teste de Formulário
      </h2>
      <p className="my-5 text-xl 4xl:text-lead text-gray-600 dark:text-gray-400">
        Este teste mostra como capturar dados de formulários e enviá-los para o
        GTM. Ao preencher e enviar este formulário, os dados são enviados para a
        camada de dados e um evento de geração de lead é disparado.
      </p>
      <form
        id="form"
        className="bg-white p-4 rounded-lg"
        onSubmit={handleGenerateLead}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Primeiro nome
            </label>
            <input
              name="first_name"
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="John"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Segundo nome
            </label>
            <input
              name="last_name"
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Doe"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Seu melhor e-mail
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              name="remember"
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Estou de acordo com todos{" "}
            <a href="#" className="text-blue-600 hover:underline">
              os termos e condições
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
