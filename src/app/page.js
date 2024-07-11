"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [gtmId, setGtmId] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerateUrl = () => {
    setGeneratedUrl(`https://tagassistant.google.com/?gtmId=${gtmId}`);
  };

  return (
    <div className="flex">
      <main className="p-8 w-full">
        <div className="flex">
          <div>
            <h1 className="text-4xl font-bold mb-8">
              Playground Métricas Boss
            </h1>
            <p className="my-5 text-xl 4xl:text-lead text-gray-600 dark:text-gray-400">
              O Playground Métricas Boss é uma ferramenta interativa para testar
              disparos de tags no Google Tag Manager (GTM). Siga as etapas
              abaixo para utilizá-lo:
            </p>
          </div>
        </div>
        <ol className="list-decimal list-inside text-lg mb-4">
          <li className="mb-2">Insira o ID do GTM no campo abaixo.</li>
          <li className="mb-2">
            Clique em {`Gerar URL`} para criar a URL do Tag Assistant.
          </li>
          <li className="mb-2">
            Copie a URL gerada e cole-a no Tag Assistant.
          </li>
          <li className="mb-2">
            Navegue pelas páginas de teste no menu à esquerda para realizar os
            testes desejados.
          </li>
          <li className="mb-2">
            Verifique os eventos disparados na interface do Tag Assistant.
          </li>
        </ol>
        <div className="mb-4">
          <label
            htmlFor="gtm-id"
            className="block text-lg font-medium dark:text-gray-100 mb-2"
          >
            Insira o ID do GTM:
          </label>
          <input
            type="text"
            id="gtm-id"
            value={gtmId}
            onChange={(e) => setGtmId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-black"
            placeholder="GTM-XXXXXXX"
          />
        </div>
        <button
          onClick={handleGenerateUrl}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 mb-4"
        >
          Gerar URL
        </button>
        {generatedUrl && (
          <div className="mt-4">
            <p className="text-lg mb-2">URL Gerada:</p>
            <textarea
              className="w-full p-2 border rounded-md text-black"
              value={generatedUrl}
              readOnly
              onFocus={(e) => e.target.select()}
            />
          </div>
        )}
      </main>
    </div>
  );
}
