import errorImg from './error.jpg';

export default function BookDetails({ bookDetails, reserveData }) {
  const { imgUrl, title, genre, author, descr } = bookDetails;

  return (
    <>
      {title === 'Дагон' ? (
        <img src={errorImg} alt={title} />
      ) : (
        <img src={imgUrl} alt={title} />
      )}
      <h2>{title}</h2>
      <p>{genre}</p>
      {author && <p>Author: {author.name}</p>}
      <p>{descr}</p>
    </>
  );
}
