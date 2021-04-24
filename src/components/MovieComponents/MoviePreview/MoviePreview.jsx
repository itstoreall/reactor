import React from 'react';
import PropTypes from 'prop-types';
import s from './MoviePreview.module.scss';

const MoviePreview = ({ state }) => {
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
      <img src={poster} alt={title} width="250" />
      <div className={s.moviesDetailsContent}>
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

MoviePreview.propTypes = {
  state: PropTypes.object.isRequired,
};

export default MoviePreview;
