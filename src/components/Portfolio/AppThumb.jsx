// import { useEffect } from 'react';
// import apps from './apps.json';
import PropTypes from 'prop-types';
import images from './images';

const AppThumb = ({ s, src, alt, requires, overlayText }) => {
  return (
    <div className={s.thumb}>
      <picture>
        <source
          // srcSet={`${images.mob_phonebook_450_wp} 1x, ${images.mob_phonebook_900_wp} 2x`}
          srcSet={src && `${images[src[0]]} 1x, ${images[src[1]]} 2x`}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          // srcSet={`${images.mob_phonebook_450} 1x, ${images.mob_phonebook_900} 2x`}
          srcSet={src && `${images[src[2]]} 1x, ${images[src[3]]} 2x`}
          media="(max-width: 767px)"
        />

        <source
          // srcSet={`${images.tab_phonebook_354_wp} 1x, ${images.tab_phonebook_708_wp} 2x`}
          srcSet={src && `${images[src[4]]} 1x, ${images[src[5]]} 2x`}
          type="image/webp"
          media="(max-width: 1199px)"
        />
        <source
          // srcSet={`${images.tab_phonebook_354} 1x, ${images.tab_phonebook_708} 2x`}
          srcSet={src && `${images[src[6]]} 1x, ${images[src[7]]} 2x`}
          media="(max-width: 1199px)"
        />

        <source
          // srcSet={`${images.desk_phonebook_370_wp} 1x, ${images.desk_phonebook_740_wp} 2x`}
          srcSet={src && `${images[src[8]]} 1x, ${images[src[9]]} 2x`}
          type="image/webp"
          media="(min-width: 1200px)"
        />
        <source
          // srcSet={`${images.desk_phonebook_370} 1x, ${images.desk_phonebook_740} 2x`}
          srcSet={src && `${images[src[10]]} 1x, ${images[src[11]]} 2x`}
          media="(min-width: 1200px)"
        />

        <img
          loading="lazy"
          className={s.image}
          // src={images.desk_phonebook_370}
          src={src && `${images[src[10]]}`}
          alt={alt}
        />
      </picture>

      <div>
        <h3>Used in the project:</h3>
        {requires !== '' && <b>{requires}</b>}
        <ul>
          {overlayText.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>

        {/* <p>{hoverText}</p> */}
      </div>
    </div>
  );
};

AppThumb.propTypes = {
  s: PropTypes.object.isRequired,
  src: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
  overlayText: PropTypes.array.isRequired,
};

export default AppThumb;
