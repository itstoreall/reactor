import errorImg from './error.jpg';
console.log(errorImg);

export default function BookDetails({ bookDetails, reserveData }) {
  const { imgUrl, title, genre, author, descr } = bookDetails;

  return (
    <>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{genre}</p>
      {author && <p>Author: {author.name}</p>}
      <p>{descr}</p>
    </>
  );
}
