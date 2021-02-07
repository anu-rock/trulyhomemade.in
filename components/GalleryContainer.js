import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "../styles/Gallery.module.css";

function GalleryContainer(props) {
  useEffect(() => {
    baguetteBox.run(`.${styles["tz-gallery"]}`, {
      animation: "fadeIn",
      noScrollbars: true,
    });
  }, []);

  return (
    <div className={styles["gallery-box"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-title text-center">
              <h2>{props.title}</h2>
              <p>{props.subtite}</p>
            </div>
          </div>
        </div>
        <div className={styles["tz-gallery"]}>
          <div className="row">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

GalleryContainer.propTypes = {
  title: PropTypes.string,
  subtite: PropTypes.string,
};

export default GalleryContainer;
