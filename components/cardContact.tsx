import Image from "next/image";
import editIcon from "/home/alexis/Dev/book-agenda/public/data/icons8-modifier-30.png";
import deleteIcon from "/home/alexis/Dev/book-agenda/public/data/icons8-close-cross-30.png";

type Contact = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birth: string;
  information: string;
};

type Props = {
  contact: Contact;
  handleEdit: (contact: Contact) => void;
  handleDelete: (id: number) => void;
};

export default function CardContact(props: Props) {
  return (
    <div className="w-1/2 mx-auto block rounded-lg bg-white p-6 flex flex-row mb-4">
      <div className="w-1/2">
        <p className="my-2 text-base uppercase">
          {props.contact.firstname} {props.contact.lastname}
        </p>
        <p className="my-2 text-base">{props.contact.email}</p>
        <p className="my-2 text-base">{props.contact.birth}</p>
        <p className="my-2 text-base">{props.contact.information}</p>
      </div>
      <div className="w-1/2 flex flex-col items-end justify-center	gap-1">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-36 flex justify-between items-center"
          onClick={() => props.handleEdit(props.contact)}
        >
          <Image alt="Image d'un icône d'edition" src={editIcon}></Image>
          <p className="uppercase">Edit</p>
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-36 flex justify-between items-center"
          onClick={() => props.handleDelete(props.contact.id)}
        >
          <Image alt="Image d'un icône de suppression" src={deleteIcon}></Image>
          <p className="uppercase">Delete</p>
        </button>
      </div>
    </div>
  );
}
