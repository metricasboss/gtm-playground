"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const getAnalyticsData = () => {
    const cookieName = "_ga_YVXB3EG0W3";
    let sessionId = null;
    // Expressão regular para extrair os dados
    const regex = new RegExp(`${cookieName}=GS(\\d)\\.(\\d)\\.(\\w+)\\.(\\d+)`);

    // Procurar o cookie e aplicar a regex
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
    // Cadastrar essas informações na activecampaign
    fetch("/api/lead/activecampaign", {
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

    // Enviar esses dados para a camada de dados
    dataLayer.push({
      event: "generate_lead",
      user_data: {
        email: "aluno@metricasboss.com.br",
        firstName: "Aluno",
        lastName: "Metricas Boss",
        phone: "+5521989321234",
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <div className="flex flex-col p-20 border-4 border-dotted border-indigo-500">
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Cadastre-se para ganhar uma esfera do dragão
        </h2>
        <form id="form" onSubmit={handleGenerateLead} action="#">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Primeiro nome
              </label>
              <input
                name="first_name"
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
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
                name="last_name"
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
                onChange={(e) => setLastName(e.target.value)}
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
              name="email"
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    </main>
  );
}
