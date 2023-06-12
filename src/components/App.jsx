import Container from './Container/Container';
import ContactForm from './ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList';
import Loader from './Loader/Loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import s from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <>
      <Container>
        <h1 className={s.h}>Phonebook</h1>
        <ContactForm />
      </Container>

      <Container>
        <h2>Contacts</h2>
        {isLoading && <Loader/>}
        {contacts.length > 1 && <Filter />}
        
        {error && <p>{error}</p>}
        {contacts.length !== 0 ? (
          <ContactList />
        ) : (
          <div className={s.savedContacts}>You have no saved contacts</div>
        )}
      </Container>
    </>
  );
}
