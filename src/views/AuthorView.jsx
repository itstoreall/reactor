import axios from 'axios';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AuthorView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(`http://localhost:2222/authors`);

    this.setState({ authors: data });
  }

  render() {
    return (
      <>
        <h1>Authors View</h1>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${this.props.match.url}/${author.id}`}>
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default AuthorView;
