import PropTypes from "prop-types";
import Link from "next/link";
import styles from "../styles/ContentWithPhoto.module.css";

function ContentWithPhoto(props) {
  return (
    <div className={styles["content-with-photo"]} style={{ backgroundImage: `url(${props.backgroundImagePath})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className={styles["inner-column"]}>
              <h1>{props.title}</h1>
              <div className={styles["content"]} dangerouslySetInnerHTML={{ __html: props.content }}></div>
              {props.readMoreUrl && (
                <Link href={props.readMoreUrl}>
                  <a className="btn btn-lg btn-circle btn-outline-new-white">Continue Reading</a>
                </Link>
              )}
            </div>
          </div>
          <div className={`${styles["photo"]} col-lg-6 col-md-6 col-sm-12`}>
            <img src={props.photoImagePath} alt="" className={`img-fluid ${styles["img-fluid"]}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

ContentWithPhoto.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  photoImagePath: PropTypes.string,
  backgroundImagePath: PropTypes.string,
  readMoreUrl: PropTypes.string,
};

export default ContentWithPhoto;
