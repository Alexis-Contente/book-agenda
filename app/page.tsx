export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="pt-12 text-center text-4xl font-bold uppercase ">
        Book agenda
      </h1>

      {/* SEARCHBAR */}
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

      {/* CARDS */}
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

      {/* MODAL FORM */}
      <form action="">
        {/* <!--Name input--> */}
        <div class="relative mb-3">
          <input
            type="text"
            class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="Name"
          />
          <label class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Name
          </label>
        </div>

        {/* <!--Firstname input--> */}
        <div class="relative mb-3">
          <input
            type="text"
            class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="Firstname"
          />
          <label class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Firstname
          </label>
        </div>

        {/* <!--Email input--> */}
        <div class="relative mb-3">
          <input
            type="email"
            class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
            Email address
          </label>
        </div>
      </form>
    </main>
  );
}
