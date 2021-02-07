import PropTypes from "prop-types";
import styles from "../styles/Gallery.module.css";

function GalleryItem(props) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4">
      <a className={styles["lightbox"]} href={props.imagePath}>
        <img className="img-fluid" src={props.imageThumbPath} alt={props.imageAltText} />
      </a>
    </div>
  );
}

GalleryItem.propTypes = {
  imagePath: PropTypes.string,
  imageThumbPath: PropTypes.string,
  imageAltText: PropTypes.string,
};

export default GalleryItem;
