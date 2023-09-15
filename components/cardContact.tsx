import Image from "next/image";
import editIcon from "/public/data/icons8-modifier-30.png";
import deleteIcon from "/public/data/icons8-close-cross-30.png";
import userIcon from "/public/data/icons8-person-24.png";
import emailIcon from "/public/data/icons8-email-24.png";
import birthIcon from "/public/data/icons8-birthday-24.png";
import informationIcon from "/public/data/icons8-information-25.png";

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
        <div className="flex gap-2 items-center">
          <Image
            alt="Image d'un icône de profil"
            src={userIcon}
            className="w-4 h-4"
          ></Image>
          <p className="my-2 text-base uppercase">
            {props.contact.firstname} {props.contact.lastname}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            alt="Image d'un icône email"
            src={emailIcon}
            className="w-4 h-4"
          ></Image>
          <p className="my-2 text-base">{props.contact.email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            alt="Image d'un icône de gâteau d'anniversaire"
            src={birthIcon}
            className="w-4 h-4"
          ></Image>
          <p className="my-2 text-base">{props.contact.birth}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            alt="Image d'un icône d'information"
            src={informationIcon}
            className="w-4 h-4"
          ></Image>
          <p className="my-2 text-base">{props.contact.information}</p>
        </div>
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
