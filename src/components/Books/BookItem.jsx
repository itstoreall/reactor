import { Link } from 'react-router-dom';

const BookItem = ({ book, match }) => {
  return (
    <li>
      <Link to={`${match.url}/${book.id}`}>{book.title}</Link>
    </li>
  );
};

export default BookItem;
