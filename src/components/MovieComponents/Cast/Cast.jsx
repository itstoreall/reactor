import React from 'react';
import PropTypes from 'prop-types';
import imgNoFound from './error.jpg';
import s from './Cast.module.scss';

const Cast = ({ credits }) => {
  const handleImgUrl = url => {
    return url ? `https://image.tmdb.org/t/p/w200${url}` : imgNoFound;
  };

  return (
    <>
      {credits && (
        <ul className={s.list}>
          {credits.cast &&
            credits.cast.map((actor, idx) => (
              <li key={`${idx}${actor.id}`}>
                <div className={s.thumb}>
                  <img
                    src={handleImgUrl(actor.profile_path)}
                    alt="jj"
                    width="100"
                  />
                </div>
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = {
  credits: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Cast;
