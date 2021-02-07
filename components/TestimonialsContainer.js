import PropTypes from "prop-types";
import styles from "../styles/Testimonials.module.css";

function TestimonialsContainer(props) {
  return (
    <div className={styles["testimonials-box"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-title text-center">
              <h2>Customer Reviews</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mr-auto ml-auto text-center">
            <div className={`${styles["carousel"]} carousel slide`} data-ride="carousel">
              <div className={`${styles["carousel-inner"]} carousel-inner mt-4`}>{props.children}</div>
              <a
                className={styles["carousel-control-prev"]}
                href={`.${styles["carousel"]}`}
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className={styles["carousel-control-next"]}
                href={`.${styles["carousel"]}`}
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialsContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TestimonialsContainer;
