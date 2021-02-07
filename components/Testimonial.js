import PropTypes from "prop-types";
import styles from "../styles/Testimonials.module.css";
import classNames from "classnames";

function Testimonial(props) {
  const carouselItemClasses = classNames(styles["carousel-item"], "carousel-item", "text-center", {
    active: props.isActive,
  });

  return (
    <div className={carouselItemClasses}>
      <div className={`${styles["img-box"]} p-1 border rounded-circle m-auto`}>
        <img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt="" />
      </div>
      <h5 className="mt-4 mb-0">
        <strong className={`${styles["text-warning"]} text-uppercase`}>{props.customerName}</strong>
      </h5>
      <h6 className="text-dark m-0">{props.customerTitle}</h6>
      <p className="m-0 pt-3">{props.testimonialText}</p>
    </div>
  );
}

Testimonial.propTypes = {
  customerName: PropTypes.string,
  customerTitle: PropTypes.string,
  testimonialText: PropTypes.string,
  isActive: PropTypes.bool,
};

Testimonial.defaultProps = {
  isActive: false,
};

export default Testimonial;
