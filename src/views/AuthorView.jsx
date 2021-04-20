import axios from 'axios';
import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';
import s from './ViewStyles.module.scss';

class AuthorView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:2222/authors?_embed=books`,
    );

    this.setState({ authors: data });
  }

  render() {
    const { match } = this.props;
    const { authors } = this.state;

    return (
      <>
        <section className={s.section}>
          <h1>Authors View</h1>
          <ul>
            {authors.map(author => (
              <li key={author.id}>
                <NavLink to={`${match.url}/${author.id}`} replace>
                  {author.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Route
            path={`${match.path}/:authorId`}
            render={props => {
              const bookId = Number(props.match.params.authorId);
              const author = authors.find(({ id }) => id === bookId);

              return (
                author && (
                  <>
                    <h3>Books by authors</h3>
                    <AuthorBooks {...props} books={author.books} />
                  </>
                )
              );
            }}
          />
        </section>
      </>
    );
  }
}

export default AuthorView;
