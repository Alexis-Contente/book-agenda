# BOOK AGENDA

## Hi legends 👋

## 🪧 A propos

Cette application est un agenda qui permet d'enregistrer de nouveaux contacts et de les consulter par la suite, ainsi que les modifier ou supprimer.

## 📔 Table des matières

- 🪧 À propos
- 🏗️ Technologies Utilisées
- 📦 Prérequis
- 🚀 Installation
- 🛠️ Utilisation
- 🗄 Structure de la base de données

## 🏗️ Technologies Utilisées

- Next.js
- TypeScript
- CSS
- Tailwind CSS
- Base de données MySQL

## 📦 Prérequis

- Node.js installé sur votre machine
- npm (ou yarn) installé sur votre machine

## 🚀 Installation

1. Clonez ce dépôt sur votre machine locale.
2. Naviguez vers le répertoire du projet via la ligne de commande.
3. Exécutez `npm install` pour installer les dépendances.
4. Exécutez `npm run dev` pour lancer l'application en mode développement.
5. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000).

## 🛠️ Utilisation

1. **Afficher sa liste de contacts** : Accédez à la page d'accueil pour voir la liste des contacts.
2. **Ajouter un contact en renseignant ses informations** : Cliquez sur le bouton "Add" pour afficher le modal d'ajout.
3. **Modifier les informations d'un contact** : Cliquez sur le bouton "Edit" d'une card pour afficher le modal de modification.
4. **Supprimer un contact** : Cliquez sur le bouton "Delete" pour supprimer un contact de sa liste.
5. **Rechercher un contact via la barre de recherche** : Commencez à écrire un nom, prenom ou adresse email dans la barre de recherche pour voir apparaître les résultats.

## 🗄 Structure de la base de données

### Table : `Contact`

Cette table stocke les loops de la catégorie Musics.

| Champ        | Type         | Description                                               |
| ------------ | ------------ | --------------------------------------------------------- |
| ID           | INT          | Identifiant unique d'un contact.                          |
| lastname     | VARCHAR(255) | Nom du contact.                                           |
| firstname    | VARCHAR(255) | Prénom du contact.                                        |
| email        | VARCHAR(255) | Email du contact.                                         |
| informations | VARCHAR(255) | Informations supplémentaires du contact, non obligatoire. |
| birth        | VARCHAR(255) | Date de naissance du contact.                             |
