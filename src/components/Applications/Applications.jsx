import useStyles from './ApplicationStyles';
import ApplicationThumb from './ApplicationThumb';
import ApplicationMeta from './ApplicationMeta';
import { apps } from './apps.json';

const Applications = () => {
  const s = useStyles();

  return (
    <div className={s.Applications}>
      <ul>
        {apps.map(({ id, src, alt, title, overlayText, page, source }) => (
          <li key={id}>
            <div className={s.appItem}>
              <ApplicationThumb
                s={s}
                src={src}
                alt={alt}
                hoverText={overlayText}
              />
              <ApplicationMeta
                s={s}
                title={title}
                page={page}
                source={source}
              />

              {/* <div className={s.meta}>
                <h3>{title}</h3>
                <p>About application</p>
                <a href={page} target="_blank" rel="noreferrer">
                  Page
                </a>
                <a href={source} target="_blank" rel="noreferrer">
                  Source
                </a>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
