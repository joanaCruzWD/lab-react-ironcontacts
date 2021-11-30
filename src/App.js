
import './App.css';
import contactsJSON from "./contacts.json";
// import ContactsList from './components/ContactsList';
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));


  const randomContacts = () => {
    const randomIndex = (Math.floor(Math.random() * (contactsJSON.length - 1)));
    console.log("randomIndex", randomIndex);
    const randomCelebrity = contactsJSON[randomIndex];
    setContacts(contacts.concat(randomCelebrity))
  }
  const sortPopularity = () => {
    const sortedPopularity = [...contacts].sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedPopularity);
  }

  const sortName = () => {
    const sortedName = [...contacts].sort(function (a, b) {
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedName);
  }

  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId
    })
    setContacts(filteredContact);
  }


  return <div className="App">
    <h2 className="header">IronContacts</h2>

    <button onClick={randomContacts}>
      Add Random Contact
    </button>
    <button onClick={sortPopularity}>
      Sort by popularity
    </button>
    <button onClick={sortName}>
      Sort by name
    </button>


    <table class="contacts-table">
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won an Oscar</th>
      <th>Won an Emmy</th>
      <th>Actions</th>

      {contacts.map((celebrity) => {

        return (
          <tr>
            <td>
              <img src={celebrity.pictureUrl} alt="profile_picture" width='70px' />
            </td>
            <td>{celebrity.name} </td>
            <td>{celebrity.popularity.toFixed(2)}</td>
            <td>{celebrity.wonOscar && <p>🏆</p>} </td>
            <td>{celebrity.wonEmmy && <p>🥇</p>}</td>


            <button onClick={() => deleteContact(celebrity.id)}>
              Delete
            </button>

          </tr>
        )
      })}
    </table>

  </div >
}

export default App;
