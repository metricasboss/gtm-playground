"use client";
import { useEffect, useState } from "react";

const products = [
  {
    id: "1",
    name: "Semente dos Deuses",
    category: "Acessórios",
    price: 50.0,
    image:
      "https://pa1.aminoapps.com/6617/dba273cc3d8f5abf180705d5b04f3041a7f3bf08_00.gif",
  },
  {
    id: "2",
    name: "Espada Z",
    category: "Armas",
    price: 100.0,
    image:
      "https://static.wikia.nocookie.net/dragonball/images/d/dc/GohanInKaiCostumeWithZSword.jpg/revision/latest/scale-to-width-down/480?cb=20210502222733&path-prefix=pt-br",
  },
  // Adicione mais itens de exemplo conforme necessário
];

export default function SearchAndResultsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [step, setStep] = useState("search");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
      setStep("results");
      const filteredResults = products.filter((item) =>
        item.name.toLowerCase().includes(queryParam.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      const newUrl = `${window.location.pathname}?query=${encodeURIComponent(
        query
      )}&vegeta=maldito`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      const filteredResults = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setStep("results");
    }
  };

  return (
    <main className="p-8 w-full">
      {step === "search" && (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Pesquisa de Produtos
          </h1>
          <form onSubmit={handleSearch} className="flex flex-col items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Digite o nome do produto"
              className="w-full px-4 py-2 border rounded-md mb-4 text-black"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Buscar
            </button>
          </form>
        </div>
      )}

      {step === "results" && (
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Resultados de Pesquisa para: {"${query}"}
          </h1>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="bg-white shadow-lg rounded-lg p-4"
                >
                  <img
                    src={result.image}
                    alt={result.name}
                    className="mb-4 w-full h-48 object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2 text-black">
                    {result.name}
                  </h2>
                  <p className="text-lg mb-2 text-gray-800">
                    Preço: R$ {result.price}
                  </p>
                  <p className="text-sm mb-2 text-gray-600">
                    Categoria: {result.category}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-center text-gray-600">
              Nenhum resultado encontrado
            </p>
          )}
          <button
            onClick={() => setStep("search")}
            className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Nova Busca
          </button>
        </div>
      )}
    </main>
  );
}
