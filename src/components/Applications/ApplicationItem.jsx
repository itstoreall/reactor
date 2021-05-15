import images from './images';

const ApplicationItem = ({ alt, s }) => {
  return (
    <>
      <div className={s.thumb}>
        <picture>
          <source
            srcSet={`${images.mob_phonebook_450_wp} 1x, ${images.mob_phonebook_900_wp} 2x`}
            type="image/webp"
            media="(max-width: 767px)"
          />
          <source
            srcSet={`${images.mob_phonebook_450} 1x, ${images.mob_phonebook_900} 2x`}
            media="(max-width: 767px)"
          />

          <source
            srcSet={`${images.tab_phonebook_354_wp} 1x, ${images.tab_phonebook_708_wp} 2x`}
            type="image/webp"
            media="(max-width: 1199px)"
          />
          <source
            srcSet={`${images.tab_phonebook_354} 1x, ${images.tab_phonebook_708} 2x`}
            media="(max-width: 1199px)"
          />

          <source
            srcSet={`${images.desk_phonebook_370_wp} 1x, ${images.desk_phonebook_740_wp} 2x`}
            type="image/webp"
            media="(min-width: 1200px)"
          />
          <source
            srcSet={`${images.desk_phonebook_370} 1x, ${images.desk_phonebook_740} 2x`}
            media="(min-width: 1200px)"
          />

          <img
            loading="lazy"
            className={s.image}
            src={images.desk_phonebook_370}
            alt={alt}
          />
        </picture>

        {/* <div className="product-overlay">
          <p className="hover-text">
            Технокряк это современная площадка распространения коронавируса.
            Компании используют эту платформу для цифрового шпионажа и атак на
            защищённые сервера конкурентов.
          </p>
        </div> */}
      </div>
      <div className={s.meta}>
        <h3>Application</h3>
        <p>About application</p>
        <a href="/">Page</a>
        <a href="/">Source</a>
      </div>
    </>
  );
};

export default ApplicationItem;
