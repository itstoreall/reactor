import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getBookDetails } from '../redux/books/actions';
import BookDetails from '../components/Books/BookDetails';
import reserveData from '../components/Books/reserveBooks.json';
import { ToastContainer } from 'react-toastify';
import notify from '../components/Toastify';
import s from './ViewStyles.module.scss';

class BookDetailsView extends Component {
  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const { getBookDetails } = this.props;

    try {
      const { data } = await axios.get(
        `http://localhost:2222/books/${bookId}?_expand=author`,
      );
      getBookDetails(data);
      notify('success', 'Successful downloading!');
      // throw new Error(); // *
    } catch (error) {
      this.getReserveBook(bookId);
      notify('error', 'Server is not available!');
    }
  }

  getReserveBook = bookId =>
    this.props.getBookDetails(
      reserveData.books.find(book => book.id === Number(bookId)),
    );

  render() {
    const { bookId } = this.props.match.params;
    const { bookDetails } = this.props;

    return (
      <>
        <section className={s.section}>
          <h1>Book Details {bookId}</h1>
          <BookDetails bookDetails={bookDetails} reserveData={reserveData} />
          <ToastContainer className={s.toast} />
        </section>
      </>
    );
  }
}

const mapState = state => ({
  bookDetails: state.books.bookDetails,
});

// const mapDispatch = dispatch => ({
//   getBookDetails: bookDetails => dispatch(getBookDetails(bookDetails)),
// });

const mapDispatch = { getBookDetails };

export default connect(mapState, mapDispatch)(BookDetailsView);
