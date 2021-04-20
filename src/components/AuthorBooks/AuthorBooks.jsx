import { NavLink } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <NavLink to={`/applications/books/${book.id}`}>{book.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AuthorBooks;

// export default class AuthorBooks extends Component {
//   // state = {
//   //   books: [],
//   // };

//   // componentDidMount() {
//   //   // При первом рендере сработает componentDidMount
//   //   const authorId = Number(this.props.match.params.authorId);
//   //   const authors = this.props.authors;
//   //   console.log('cDM', authorId, authors);

//   //   // Получаем все книги автора по его id
//   //   const { books } = authors.find(author => author.id === authorId);
//   //   console.log(books);

//   //   this.setState({ books });
//   // }

//   // componentDidUpdate() {
//   //   // При повторном нажатии на имя автора сработает componentDidUpdate
//   //   const authorId = Number(this.props.match.params.authorId);
//   //   const authors = this.props.authors;
//   //   console.log('cDU', authorId, authors);

//   //   const author = authors.find(author => author.id === authorId);
//   //   console.log(author);
//   // }

//   render() {
//     const { authorId } = this.props.match.params;
//     // const { books } = this.state;
//     return (
//       <>
//         <h3>Author's book {`${authorId}`} Component</h3>
//         {/* <ul>
//           {books.map(book => (
//             <li key={book.id}>{book.title}</li>
//           ))}
//         </ul> */}
//       </>
//     );
//   }
// }
