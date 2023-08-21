export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="pt-12 text-center text-4xl font-bold uppercase ">
        Book agenda
      </h1>

      <nav className="w-1/2 mx-auto mt-12 space-x-2 flex">
        <input
          type="text"
          placeholder="Search contact"
          className="border-2 rounded py-2 px-4 grow"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36">
          Search
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-36">
          Add
        </button>
      </nav>
    </main>
  );
}
