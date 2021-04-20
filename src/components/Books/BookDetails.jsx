export default function BookDetails({ bookDetails }) {
  const { imgUrl, title, genre, author, descr } = bookDetails;

  return (
    <>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{genre}</p>
      <p>Author: {author.name}</p>
      <p>{descr}</p>
    </>
  );
}
