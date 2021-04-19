import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getBookDetails } from '../redux/books/actions';
import { ToastContainer } from 'react-toastify';
import notify from '../components/Toastify';
import s from './ViewStyles.module.scss';

class BookDetailsView extends Component {
  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const { getBookDetails } = this.props;

    try {
      const { data } = await axios.get(`http://localhost:2222/books/${bookId}`);
      getBookDetails(data);
      notify('success', 'Successful downloading!');
      // throw new Error(); // *
    } catch (error) {
      notify('error', 'Server is not available!');
    }
  }

  render() {
    const { bookId } = this.props.match.params;
    const { bookDetails } = this.props;

    return (
      <>
        <section className={s.section}>
          <h1>Book Details {bookId}</h1>
          <img src={bookDetails.imgUrl} alt={bookDetails.title} />
          <h2>{bookDetails.title}</h2>
          <p>{bookDetails.genre}</p>
          <p>{bookDetails.descr}</p>
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
