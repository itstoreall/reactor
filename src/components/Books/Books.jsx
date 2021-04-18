import { Component } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import { ToastContainer } from 'react-toastify';
import notify from '../../components/Toastify';
import s from './BookStyles.module.scss';

export default class Books extends Component {
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
    }
  }

  render() {
    const { books } = this.state;

    return (
      <>
        {books.length !== 0 && (
          <ul>
            {books.map(book => (
              <BookItem key={book.id} book={book} />
            ))}
          </ul>
        )}
        <ToastContainer className={s.toast} />
      </>
    );
  }
}
