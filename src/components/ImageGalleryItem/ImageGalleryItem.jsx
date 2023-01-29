import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image, openModal }) {
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        data-img={largeImageURL}
        alt={tags}
        onClick={openModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};

export default ImageGalleryItem;
