import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getBookDetails } from '../redux/books/actions';
import BookDetails from '../components/Books/BookDetails';
import { routes } from '../components/routes';
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

  componentWillUnmount() {
    this.props.getBookDetails({});
  }

  getReserveBook = bookId =>
    this.props.getBookDetails(
      reserveData.books.find(book => book.id === Number(bookId)),
    );

  handleGoBack = () => {
    const { location, history } = this.props;

    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push(routes[2].path);

    // history.push(location.state.from);
  };

  render() {
    const { bookDetails } = this.props;

    return (
      <>
        <section className={s.section}>
          <button
            className={s.goBackBtn}
            type="button"
            onClick={this.handleGoBack}
          >
            &#8592; Go back
          </button>
          <h1>Book Details</h1>
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
