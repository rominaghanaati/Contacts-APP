import styles from "./ContactsItem.module.css";

function ContanctItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li className={styles.item} key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span className={styles.email}>&#9993; </span>
        {email}
      </p>
      <p>
        <span className={styles.phone}>&#128241; </span>
        {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>DELETE</button>
    </li>
  );
}

export default ContanctItem;
