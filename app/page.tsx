export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="pt-12 text-center text-4xl font-bold uppercase ">
        Book agenda
      </h1>

      <nav className="w-1/2 mx-auto mt-12 mb-12 space-x-2 flex">
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

      <div className="w-1/2 mx-auto block rounded-lg bg-white p-6 flex flex-row mb-4">
        <div className="w-1/2">
          <p className="my-2 text-base uppercase">NAME FIRSTNAME</p>
          <p className="my-2 text-base">EMAIL</p>
          <p className="my-2 text-base">DATE OF BIRTH</p>
        </div>
        <div className="w-1/2 flex flex-col items-end justify-center	gap-1">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-36">
            MODIFY
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-36">
            DELETE
          </button>
        </div>
      </div>
    </main>
  );
}
