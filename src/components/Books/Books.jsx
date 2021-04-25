import { Component } from 'react';
import axios from 'axios';
import reserveData from '../reserveData.json';
import BookList from './BookList';
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

    return (
      <>
        {books.length !== 0 && <BookList books={books} />}
        <ToastContainer className={s.toast} />
      </>
    );
  }
}

export default Books;
