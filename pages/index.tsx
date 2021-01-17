import Head from "next/head";
import { Logo, Menu } from "../components";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Good Dave Deli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="font-display">
        <nav className="lg:mx-12 my-4 flex justify-between items-center">
          <a
            className="w-full flex-1 flex justify-center text-2xl text-gray-600 text-center transform -rotate-1 hover:rotate-1 duration-75 ease-in-out p-2"
            onClick={() => alert(`It's tonight MOFOs!`)}
          >
            Opening
            <br />
            Night
          </a>
          <Logo />
          <a
            className="w-full flex-1 flex justify-center text-2xl text-gray-600 text-center transform rotate-1 hover:-rotate-1 duration-75 ease-in-out p-2"
            onClick={() => alert(`In West Philadelphia, born and raised...`)}
          >
            Our
            <br />
            Story
          </a>
        </nav>
      </header>

      <main className="flex-1 mt-4 lg:mt-12 p-4">
        <Menu className="mx-auto" />
      </main>

      <footer className="mt-4 mb-6 font-display text-center text-yellow-600">
        <span className="font-body font-black">&copy;</span> Dave Calnan 2021
      </footer>
    </div>
  );
};

export default Home;
