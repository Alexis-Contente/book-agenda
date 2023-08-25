"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";
import editIcon from "/home/alexis/Dev/book-agenda/public/data/icons8-modifier-30.png";
import deleteIcon from "/home/alexis/Dev/book-agenda/public/data/icons8-close-cross-30.png";

// TYPE CONTACTS
type Contacts = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  birth: string;
  information: string;
};

export default function Home() {
  // TOGGLE MODAL
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };

  // FUNCTION THAT GET INFORMATIONS OF CONTACTS FOR DISPLAY
  const [contacts, setContacts] = useState<Contacts[]>([]);

  // REQUEST TO GET DATA CONTACT
  const contactsData = async () => {
    axios
      .get("/api/contact")
      .then((response) => {
        setContacts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    contactsData();
  }, []);

  // HANDLE THAT SAVE INFORMATIONS OF A NEW CONTACT
  const formRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = new FormData(formRef.current);

    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const email = data.get("email");
    const birth = data.get("birth");
    const information = data.get("information");
    console.log(firstname, lastname, email, birth, information);

    axios
      .post("/api/contact", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        birth: birth,
        information: information,
      })
      .then((response) => {
        window.location.reload();
        // console.log(response);
        console.log("Données envoyées à l'API");
        return response;
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données vers l'API", error);
      });
  };

  // HANDLE THAT DELETE A CONTACT
  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      if (contacts) {
        const contactId = e.target.id;
        axios.delete(`/api/contact/${contactId}`);
        console.log("Contact supprimé");
      }
    } catch (error) {
      console.error("Impossible de supprimer le contact", error);
    }
  };

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
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-36"
          onClick={openModal}
        >
          Add
        </button>
      </nav>

      {/* CARDS */}
      {contacts &&
        contacts.map((contact) => (
          <div
            key={contact.id}
            className="w-1/2 mx-auto block rounded-lg bg-white p-6 flex flex-row mb-4"
          >
            <div className="w-1/2">
              <p className="my-2 text-base uppercase">
                {contact.firstname} {contact.lastname}
              </p>
              <p className="my-2 text-base">{contact.email}</p>
              <p className="my-2 text-base">{contact.birth}</p>
              <p className="my-2 text-base">{contact.information}</p>
            </div>
            <div className="w-1/2 flex flex-col items-end justify-center	gap-1">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-36 flex justify-between items-center">
                <Image alt="Image d'un icône d'edition" src={editIcon}></Image>
                <p className="uppercase">Modify</p>
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-36 flex justify-between items-center"
                onClick={handleDelete}
              >
                <Image
                  alt="Image d'un icône de suppression"
                  src={deleteIcon}
                ></Image>
                <p className="uppercase">Delete</p>
              </button>
            </div>
          </div>
        ))}

      {/* MODAL FORM */}

      {/* <!-- Main modal --> */}
      {showModal && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
        >
          <div className="absolute w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-400">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-red-600 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={openModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <form
                  className="space-y-6"
                  action="#"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark"
                      placeholder="Enter lastname"
                      required
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Firstname
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark"
                      placeholder="Enter firstname"
                      required
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark"
                      placeholder="Enter email"
                      required
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date of birth
                    </label>
                    <input
                      type="text"
                      name="birth"
                      id="birth"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark"
                      placeholder="Enter date of birth"
                      required
                    ></input>
                    <label
                      htmlFor="email"
                      className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Information
                    </label>
                    <textarea
                      name="information"
                      id="information"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark"
                      placeholder="Other informations"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
