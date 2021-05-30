import useStyles from './PortfolioStyles';
import AppThumb from './AppThumb';
import AppMeta from './AppMeta';
import { apps } from './apps.json';

const Portfolio = () => {
  const s = useStyles();

  return (
    <div className={s.Applications}>
      <ul>
        {apps.map(
          ({ id, src, alt, title, description, overlayText, page, source }) => (
            <li key={id}>
              <div className={s.appItem}>
                <AppThumb s={s} src={src} alt={alt} overlayText={overlayText} />
                <AppMeta
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

export default Portfolio;
