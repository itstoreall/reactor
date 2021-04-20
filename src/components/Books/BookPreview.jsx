import errorImg from './error.jpg';
console.log(errorImg);

const BookPreview = ({ book }) => {
  console.log(book.title === 'Дагон');

  return (
    <div>
      {book.title === 'Дагон' ? (
        <img src={errorImg} alt={book.title} />
      ) : (
        <img src={book.imgUrl} alt={book.title} />
      )}
      <div>
        <h3>{book.title}</h3>
        <p>{book.genre}</p>
      </div>
    </div>
  );
};

export default BookPreview;
