import ContentContactSocial from './ContentContactSocial';
import useStyles from './ResumeStyles';

const ContentContacts = ({ tablet, desktop, resume }) => {
  const { phone, phone_href, email, social, email_href } = resume.contacts;
  const s = useStyles();

  return (
    <section className={s.contacts}>
      <h2>Contacts:</h2>
      <ul className={s.contactList}>
        <li>
          Phone:
          {tablet && !desktop && <br />}
          <a className={s.contactLink} href={phone_href}>
            {phone}
          </a>
        </li>

        <li>
          E-mail:
          {tablet && !desktop && <br />}
          <a className={s.contactLink} href={email_href}>
            {email}
          </a>
        </li>
      </ul>

      <div className={s.socialList}>
        {social.map(({ title, icon, link }) => (
          <ContentContactSocial
            key={title}
            title={title}
            icon={icon}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentContacts;
