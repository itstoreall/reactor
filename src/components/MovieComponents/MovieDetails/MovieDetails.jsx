import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieDetailsStyles.module.scss';

const MovieDetails = ({ state }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = state;
  const poster = `https://image.tmdb.org/t/p/w400/${poster_path}`;

  return (
    <div className={s.moviesDetailsWrap}>
      <div className={s.thumb}>
        <img src={poster} alt={title} />
      </div>
      <div className={s.meta}>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <span>{`User Score: ${vote_average * 10}%`}</span>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(genre => (
          <span key={genre.name}>{genre.name} </span>
        ))}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  state: PropTypes.object.isRequired,
};

export default MovieDetails;
