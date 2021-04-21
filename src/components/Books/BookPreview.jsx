import errorImg from './error.jpg';
import s from './BookStyles.module.scss';

const BookPreview = ({ imgUrl, title, genre }) => {
  return (
    <div>
      <div className={s.thumb}>
        {title === 'Дагон' ? (
          <img src={errorImg} alt={title} />
        ) : (
          <img src={imgUrl} alt={title} />
        )}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default BookPreview;
