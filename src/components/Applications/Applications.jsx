import { NavLink, withRouter } from 'react-router-dom';
import useStyles from './ApplicationStyles';
import { apps } from './apps.json';

const Applications = ({ location, match }) => {
  const s = useStyles();

  return (
    <div className={s.Applications}>
      <ul className={s.list}>
        {apps.map(({ id, url, name }) => (
          <li key={id} className={s.item}>
            {/* <NavLink to={`${match.url}/${url}`}>{name}</NavLink> */}
            <NavLink
              to={{
                pathname: `${match.url}/${url}`,
                state: {
                  from: location,
                },
              }}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <p>
        Hi from Applications Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Numquam quos id ipsa et dolorum magnam labore, iure soluta
        incidunt neque quo quis officiis quaerat! Laborum, possimus delectus.
        Hic doloribus consequatur aperiam, architecto illo neque autem nesciunt,
        obcaecati beatae voluptate deserunt inventore nam minima tempora eaque
        optio amet ex eligendi quaerat minus? Porro nam, et possimus fugit odio
        deleniti fuga eius itaque aliquam voluptatibus autem magni quos?
        Assumenda aperiam quas animi, similique reiciendis quos! Quas,
        repellendus deleniti debitis repellat illum ea eum suscipit facere
        praesentium harum est ex ut vel accusamus voluptates ratione hic
        repudiandae reiciendis magnam perferendis.
      </p>
      <p>
        Reprehenderit fugit nam, similique sint obcaecati placeat ratione
        quaerat, inventore ad praesentium consectetur maiores mollitia? Porro
        eum ex distinctio atque facere optio et maiores. Enim blanditiis in
        praesentium beatae modi vel ad quod? Doloribus ratione iure perspiciatis
        cupiditate eius cum placeat perferendis ab id. Aliquid debitis
        perspiciatis sit ducimus aliquam, laborum totam modi accusamus rerum.
        Delectus, quia. Nostrum, repellendus! Veritatis quasi incidunt dolorem
        tempora amet saepe commodi rem consectetur, rerum nulla laborum
        repudiandae iusto cupiditate pariatur mollitia consequatur fugiat, ipsam
        error? Porro accusamus perspiciatis quos delectus, ea mollitia dolorem
        illo.
      </p>
      <p>
        Nemo aut architecto similique iste reprehenderit voluptate soluta
        impedit quidem ipsum. Sunt, debitis odit, culpa, voluptas asperiores
        neque tempora eveniet quam obcaecati animi ducimus. Blanditiis porro
        enim corrupti. Dolor, iure? Temporibus debitis neque quibusdam,
        explicabo quas provident reiciendis vitae sapiente, exercitationem
        quaerat ducimus, aliquam dicta aliquid odit. Distinctio, praesentium,
        quam dolorum, reiciendis similique placeat hic magnam enim error natus
        ratione! Atque, et amet.
      </p>
      <p>
        Reprehenderit fugit nam, similique sint obcaecati placeat ratione
        quaerat, inventore ad praesentium consectetur maiores mollitia? Porro
        eum ex distinctio atque facere optio et maiores. Enim blanditiis in
        praesentium beatae modi vel ad quod? Doloribus ratione iure perspiciatis
        cupiditate eius cum placeat perferendis ab id. Aliquid debitis
        perspiciatis sit ducimus aliquam, laborum totam modi accusamus rerum.
        Delectus, quia. Nostrum, repellendus! Veritatis quasi incidunt dolorem
        tempora amet saepe commodi rem consectetur, rerum nulla laborum
        repudiandae iusto cupiditate pariatur mollitia consequatur fugiat, ipsam
        error? Porro accusamus perspiciatis quos delectus, ea mollitia dolorem
        illo.
      </p>
    </div>
  );
};

export default withRouter(Applications);
