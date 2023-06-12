import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import Button from '../Button/Button';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';


function ContactList() {
  const items = useSelector(selectFilteredContacts);
  // const nameFilter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const removeContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  // const FilterItems = () => {
  //   return items.filter((item) => item.name.toLowerCase().includes(nameFilter));
  // };

  // let contacts = nameFilter === "" ? items : FilterItems();

  return (
    <ul className={s.container}>
      {items.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name} :</p>
          <p className={s.text}>{phone}</p>
          <Button text="Delete" onClick={() => removeContact(id)} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;