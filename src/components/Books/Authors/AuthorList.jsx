import { NavLink, Route, withRouter } from 'react-router-dom';
import BookList from '../BookList';
import reserveData from '../../reserveData.json';
import s from './AuthorStyles.module.scss';

const AuthorList = ({ authors, match }) => {
  return (
    <>
      <ul className={s.Autorlist}>
        {authors
          ? authors.map(({ id, name }) => (
              <li key={id}>
                <NavLink to={`${match.url}/${id}`} replace>
                  {name}
                </NavLink>
              </li>
            ))
          : reserveData.authors.map(({ id, name }) => (
              <li key={id}>
                <NavLink to={`${match.url}/${id}`} replace>
                  {name}
                </NavLink>
              </li>
            ))}
      </ul>

      <Route
        path={`${match.path}/:authorId`}
        render={props => {
          const bookId = Number(props.match.params.authorId);
          const author = authors.find(({ id }) => id === bookId);
          const reserveAuthor = reserveData.authors.find(
            ({ id }) => id === bookId,
          );

          return (
            author && (
              <>
                {/* // <div className={s.authorBooksWrap}> */}
                <h2>Books by authors</h2>
                <BookList
                  {...props}
                  books={author.books}
                  reserveAuthor={reserveAuthor}
                />
                {/* // </div> */}
              </>
            )
          );
        }}
      />
    </>
  );
};

export default withRouter(AuthorList);

/*
import { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import BookList from '../BookList';
import reserveData from '../../reserveData.json';
import { ToastContainer } from 'react-toastify';
import notify from '../../Toastify';
import s from './AuthorStyles.module.scss';

class AuthorList extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `http://localhost:2222/authors?_embed=books`,
      );

      this.setState({ authors: data });
      notify('success', 'Successful downloading!');
      // throw new Error();
    } catch (error) {
      notify('error', 'Server is not available!');
      this.setState({ authors: reserveData.authors });
    }
  }

  render() {
    const { match } = this.props;
    const { authors } = this.state;
    console.log('authors', authors);
    console.log('params', match.params);
    console.log('match.path', match.path);

    return (
      <div className={s.autorListWrap}>
        <ul className={s.Autorlist}>
          {authors
            ? authors.map(({ id, name }) => (
                <li key={id}>
                  <NavLink to={`${match.url}/${id}`} replace>
                    {name}
                  </NavLink>
                </li>
              ))
            : reserveData.authors.map(({ id, name }) => (
                <li key={id}>
                  <NavLink to={`${match.url}/${id}`} replace>
                    {name}
                  </NavLink>
                </li>
              ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          // path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = authors.find(({ id }) => id === bookId);
            const reserveAuthor = reserveData.authors.find(
              ({ id }) => id === bookId,
            );

            console.log('bookId', bookId);
            console.log('author', author);

            return (
              author && (
                <div className={s.autorBooksWrap}>
                  <h3>Books by authors</h3>
                  <BookList
                    {...props}
                    books={author.books}
                    reserveAuthor={reserveAuthor}
                  />
                  <AuthorBooks
                    {...props}
                    books={author.books}
                    reserveAuthor={reserveAuthor}
                  />
                </div>
              )
            );
          }}
        />
        <ToastContainer className={s.toast} />
      </div>
    );
  }
}

export default withRouter(AuthorList);
*/
