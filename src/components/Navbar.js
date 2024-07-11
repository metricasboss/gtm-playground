import Link from "next/link";
import Logo from "./Logo";

const sections = {
  clickEvent: "Teste de Evento de Clique",
  formTest: "Teste de Formulário",
  ecommerceTest: "Teste de Eventos de E-commerce",
  iframe: "Teste de eventos em iframe",
};

export default function Navbar() {
  return (
    <nav
      className="group fixed -left-full invisible lg:visible lg:h-[calc(100vh_-_theme(spacing.20))] lg:sticky lg:left-0 lg:top-0 flex-none overflow-hidden
                [&.open]:max-lg:visible [&.open]:max-lg:z-50 [&.open]:max-lg:inset-0 bg-gray-50 dark:bg-gray-700 min-h-screen"
    >
      <div className="flex items-center p-4">
        <Logo />
        <h2 className="text-xl font-bold">Playground</h2>
      </div>

      <div
        className="docs-menu h-full w-full max-w-xs lg:w-72 px-10 lg:pl-6 py-16 relative z-10 bg-gray-50 dark:bg-gray-800 overflow-x-hidden overflow-y-auto 
                        max-lg:pl-8 max-lg:pr-12 max-lg:-translate-x-full group-[.open]:max-lg:translate-x-0 group-[.open]:max-lg:shadow-lg group-[.open]:max-lg:transition group-[.open]:max-lg:ease-out
                        group-[.has-sidebar-transparent]/html:lg:bg-transparent group-[.has-sidebar-transparent]/html:lg:dark:bg-transparent group-[.has-sidebar-transparent]/html:lg:border-r group-[.has-sidebar-transparent]/html:lg:border-gray-900/5 group-[.has-sidebar-transparent]/html:lg:dark:border-gray-50/5
                        group-[.has-sidebar-dark]/html:bg-gray-900 group-[.has-sidebar-dark.dark]/html:bg-gray-950
                        "
      >
        <ul className="text-sm space-y-8 group-[.no-sections]:space-y-0 mt-8">
          <li className={"group/ds "}>
            <Link
              className={`group/dh relative w-full font-semibold dark:text-gray-50 group-[.no-sections]:hidden  pr-1 cursor-pointer`}
              href="/"
            >
              Página inicial
            </Link>
          </li>
          <li className={"group/ds "}>
            <Link
              className={`group/dh relative w-full font-semibold dark:text-gray-50 group-[.no-sections]:hidden  pr-1 cursor-pointer`}
              href="/click-event"
            >
              {sections.clickEvent}
            </Link>
          </li>
          <li className={"group/ds "}>
            <Link
              className={`group/dh relative w-full font-semibold dark:text-gray-50 group-[.no-sections]:hidden  pr-1 cursor-pointer`}
              href="/form-test"
            >
              {sections.formTest}
            </Link>
          </li>
          <li className={"group/ds "}>
            <Link
              className={`group/dh relative w-full font-semibold dark:text-gray-50 group-[.no-sections]:hidden  pr-1 cursor-pointer`}
              href="/ecommerce"
            >
              {sections.ecommerceTest}
            </Link>
          </li>
          <li className={"group/ds "}>
            <Link
              className={`group/dh relative w-full font-semibold dark:text-gray-50 group-[.no-sections]:hidden  pr-1 cursor-pointer`}
              href="/iframe"
            >
              {sections.iframe}
            </Link>
          </li>
          <li className={"group/ds "}>
            <Link
              className={`group/dh relative w-full font-semibold dark:text-gray-50 group-[.no-sections]:hidden  pr-1 cursor-pointer`}
              href="/search"
            >
              {`Teste em pagina de pesquisa`}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
