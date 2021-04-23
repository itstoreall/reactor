import { Link, withRouter } from 'react-router-dom';
import BookPreview from './BookPreview';
import s from './BookStyles.module.scss';
import reserveAuthor from '../reserveData.json';

// Reuseble Component
const BookList = ({ books, location }) => {
  return (
    <>
      {books ? (
        <ul className={s.bookList}>
          {books.map(({ id, imgUrl, title, genre }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/applications/books/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <BookPreview imgUrl={imgUrl} title={title} genre={genre} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>{`To see ${reserveAuthor.name}'s books, you need to turn on the Local Server`}</p>
      )}
    </>
  );
};

export default withRouter(BookList);
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
