import PropTypes from 'prop-types';

const AppMeta = ({ s, title, description, page, source }) => {
  return (
    <div className={s.meta}>
      <h3>{title}</h3>
      <p>{description}</p>
      {page.length !== 0 && (
        <a href={page} target="_blank" rel="noreferrer">
          Page
        </a>
      )}
      <a href={source} target="_blank" rel="noreferrer">
        Source
      </a>
    </div>
  );
};

AppMeta.propTypes = {
  s: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default AppMeta;
