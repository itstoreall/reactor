import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import BookPreview from './BookPreview';
import reserveData from './reserveBooks.json';
import { ToastContainer } from 'react-toastify';
import notify from '../../components/Toastify';
import s from './BookStyles.module.scss';

class Books extends Component {
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
    const { match } = this.props;

    return (
      <>
        {books.length !== 0 && (
          <ul className={s.bookList}>
            {books.map(book => (
              <li key={book.id}>
                <Link to={`${match.url}/${book.id}`}>
                  <BookPreview book={book} />
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

export default withRouter(Books);
