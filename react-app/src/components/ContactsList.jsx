import ContanctItem from "./ContanctItem";
import styles from "./ContactList.module.css";

function ContactsList(props) {
  const contacts = props.contacts;
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContanctItem
              key={contact.id}
              data={contact}
              deleteHandler={props.deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet</p>
      )}
    </div>
  );
}

export default ContactsList;
