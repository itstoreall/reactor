import useStyles from './ResumeStyles';

const ContentContacts = ({ tablet, desktop, resume }) => {
  const { phone, phone_href, email, email_href } = resume.contacts;
  const s = useStyles();

  return (
    <section className={s.contacts}>
      <h2>Contacts:</h2>
      <ul className={s.contactList}>
        <li>
          Phone:
          {tablet && !desktop && <br />}
          <a href={phone_href}>{phone}</a>
        </li>
        <li>
          E-&nbsp;mail:
          {tablet && !desktop && <br />}
          <a href={email_href}>{email}</a>
        </li>
      </ul>
    </section>
  );
};

export default ContentContacts;
