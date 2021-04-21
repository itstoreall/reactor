import errorImg from './error.jpg';
import s from './BookStyles.module.scss';

export default function BookDetails({ bookDetails, reserveData }) {
  const { imgUrl, title, genre, author, descr } = bookDetails;

  return (
    <div className={s.BookDetails}>
      <div className={s.thumb}>
        {title === 'Дагон' ? (
          <img src={errorImg} alt={title} />
        ) : (
          <img src={imgUrl} alt={title} />
        )}
      </div>
      <h2>{title}</h2>
      <p>{genre}</p>
      {author && <p>Author: {author.name}</p>}
      <p>{descr}</p>
    </div>
  );
}
