import { Link } from 'react-router-dom';
import BookPreview from './BookPreview';
import s from './BookStyles.module.scss';

// Reuseble Component
export default function BookList({ books }) {
  return (
    <>
      <ul className={s.bookList}>
        {books.map(({ id, imgUrl, title, genre }) => (
          <li key={id}>
            <Link to={`/applications/books/${id}`}>
              <BookPreview imgUrl={imgUrl} title={title} genre={genre} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

/*
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookPreview from './BookPreview';
import reserveData from './reserveBooks.json';
import { ToastContainer } from 'react-toastify';
import notify from '../../components/Toastify';
import s from './BookStyles.module.scss';

class BookList extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('http://localhost:2222/books');
      this.setState({ books: data });
      notify('success', 'Successful downloading!');
      // throw new Error();
    } catch (error) {
      notify('error', 'Server is not available!');
      this.setState({ books: reserveData.books });
    }
  }

  render() {
    const { books } = this.state;

    return (
      <>
        {books.length !== 0 && (
          <ul className={s.bookList}>
            {books.map(({ id, imgUrl, title, genre }) => (
              <li key={id}>
                <Link to={`/applications/books/${id}`}>
                  <BookPreview imgUrl={imgUrl} title={title} genre={genre} />
                </Link>
              </li>
              // <BookItem key={book.id} book={book} />
            ))}
          </ul>
        )}
        <ToastContainer className={s.toast} />
      </>
    );
  }
}

export default BookList;

*/
