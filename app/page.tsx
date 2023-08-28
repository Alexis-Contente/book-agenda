"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Header from "@/components/header";
import SearchBar from "@/components/searchBar";
import CardContact from "@/components/cardContact";
import AddForm from "@/components/addForm";
import EditForm from "@/components/editForm";
import Footer from "@/components/footer";

// TYPE CONTACTS
type Contact = {
  id: number;
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

  // TOGGLE MODAL EDIT
  const [showModalEdit, setShowModalEdit] = useState(false);
  const openModalEdit = () => {
    setShowModalEdit(!showModalEdit);
  };

  // FUNCTION THAT GET INFORMATIONS OF CONTACTS FOR DISPLAY
  const [contacts, setContacts] = useState<Contact[]>([]);

  // FUNCTION THAT GET INFORMATIONS OF CONTACTS FOR EDIT
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // TOGGLE EDIT MODAL
  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact);
    setShowModalEdit(true);
  };

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
  const handleDelete = async (id: number) => {
    try {
      if (contacts) {
        console.log(id);
        await axios.delete(`/api/contact/${id}`);
        console.log("Contact supprimé");
      }
    } catch (error) {
      console.error("Impossible de supprimer le contact", error);
    } finally {
      window.location.reload();
    }
  };

  // HANDLE THAT EDIT A CONTACT
  const [firstname, setFirstname] = useState(selectedContact?.firstname);
  const [lastname, setLastname] = useState(selectedContact?.lastname);
  const [email, setEmail] = useState(selectedContact?.email);
  const [birth, setBirth] = useState(selectedContact?.birth);
  const [information, setInformation] = useState(selectedContact?.information);

  const handleSubmitEdit = async (id: number) => {
    try {
      if (contacts) {
        await axios.put(`/api/contact/${id}`, {
          firstname,
          lastname,
          email,
          birth,
          information,
        });
        console.log("Contact updated");
      }
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };

  // GESTION SEARCHBAR

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = contacts.filter((contact) =>
      contact.firstname.toLowerCase().includes(searchTerm)
    );
  }, []);

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    const value = e.target.value;
    setSearchTerm(value);
  };
  console.log(searchTerm);

  return (
    <main className="min-h-screen">
      <Header></Header>
      {/* SEARCHBAR */}
      <SearchBar openModal={openModal} onChange={handleSearchTerm}></SearchBar>

      {/* CARDS */}
      {contacts &&
        contacts
          .filter((contact) => {
            return (
              contact.firstname.toLowerCase().includes(searchTerm) ||
              contact.lastname.toLowerCase().includes(searchTerm) ||
              contact.email.toLowerCase().includes(searchTerm)
            );
          })
          .map((contact: Contact) => (
            <CardContact
              key={contact.id}
              handleEdit={() => {
                handleEdit(contact);
              }}
              handleDelete={() => {
                handleDelete(contact.id);
              }}
              contact={contact}
            ></CardContact>
          ))}

      {/* MODAL FORM */}

      {/* <!-- Main modal --> */}
      {showModal && (
        <AddForm
          openModal={openModal}
          formRef={formRef}
          handleSubmit={handleSubmit}
        ></AddForm>
      )}

      {/* MODAL EDITFORM */}

      {/* <!-- Main modal --> */}
      {showModalEdit && selectedContact && (
        <EditForm
          openModalEdit={openModalEdit}
          selectedContact={selectedContact}
          formRef={formRef}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setEmail={setEmail}
          setBirth={setBirth}
          setInformation={setInformation}
          handleSubmitEdit={handleSubmitEdit}
        ></EditForm>
      )}
      <Footer></Footer>
    </main>
  );
}
