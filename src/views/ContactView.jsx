import Contacts from '../components/Contacts';
import s from './ViewStyles.module.scss';

export default function ContactsView() {
  return (
    <section className={s.section}>
      <h1>Contacts</h1>
      <Contacts />
    </section>
  );
}
