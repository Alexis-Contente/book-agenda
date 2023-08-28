import Image from "next/image";
import addIcon from "/home/alexis/Dev/book-agenda/public/data/icons8-add-30.png";

type Props = {
  openModal: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar(props: Props) {
  return (
    <nav className="w-1/2 mx-auto mt-12 mb-12 space-x-2 flex">
      <input
        type="text"
        placeholder="Search contact"
        className="border-2 rounded py-2 px-4 grow"
        onChange={props.onChange}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-36 flex justify-between items-center"
        onClick={props.openModal}
      >
        <Image alt="Image d'un icône d'ajout" src={addIcon}></Image>
        <p className="uppercase">Add</p>
      </button>
    </nav>
  );
}
