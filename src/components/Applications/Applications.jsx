import useStyles from './ApplicationStyles';
import ApplicationThumb from './ApplicationThumb';
import ApplicationMeta from './ApplicationMeta';
import { apps } from './apps.json';

const Applications = () => {
  const s = useStyles();

  return (
    <div className={s.Applications}>
      <ul>
        {apps.map(
          ({ id, src, alt, title, description, overlayText, page, source }) => (
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
                  description={description}
                  page={page}
                  source={source}
                />
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Applications;
