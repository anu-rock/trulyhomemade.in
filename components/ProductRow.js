import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "../styles/ProductRow.module.css";

function ProductRow(props) {
  const rowClasses = getRowClasses(props);
  const productDetailsClasses = getProductDetailsClasses(props);

  return (
    <div className={styles["product-section-box"]}>
      <div className="container text-center">
        <div className={rowClasses}>
          <div className="product-img col-lg-6 col-md-6 col-sm-12">
            <img className="img-fluid" src={props.photoPath} alt={props.photoAltText} />
          </div>
          <div className={productDetailsClasses}>
            <h2 className="d-inline-block">{props.title}</h2>
            {props.iconPath && (
              <span className={styles["icon"]}>
                <img src={props.iconPath} />
              </span>
            )}
            <p>{props.subtitle}</p>
            <a className="btn btn-lg btn-outline-new-white" href={props.detailUrl}>
              Know More
            </a>
          </div>
        </div>
        {props.showSeparator && (
          <div className={styles["separator"]}>
            <img src="images/brand-separator.png" alt="Separator line" />
          </div>
        )}
      </div>
    </div>
  );
}

function getRowClasses(props) {
  return classNames(
    "row",
    "d-flex",
    { "flex-row-reverse": !props.photoOnLeft },
    "align-items-center",
    "justify-content-center"
  );
}

function getProductDetailsClasses(props) {
  return classNames(
    "product-details",
    "col-lg-6",
    "col-md-6",
    "col-sm-12",
    { "text-left": props.photoOnLeft },
    { "text-right": !props.photoOnLeft }
  );
}

ProductRow.propTypes = {
  photoOnLeft: PropTypes.bool,
  photoPath: PropTypes.string,
  photoAltText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  iconPath: PropTypes.string,
  detailUrl: PropTypes.string,
  showSeparator: PropTypes.bool,
};

ProductRow.defaultProps = {
  photoOnLeft: true,
  showSeparator: true,
};

export default ProductRow;
