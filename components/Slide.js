import PropTypes from "prop-types";
import styles from "../styles/Slides.module.css";

function Slide(props) {
  return (
    <li className="text-center">
      <img src={props.backgroundImagePath} alt={props.backgroundImageAltText} />
      <div className={`container ${styles["container"]}`}>
        <div className={`row ${styles["row"]}`}>
          <div className="col-md-12">
            <h1 className="m-b-20">
              <strong>
                {props.headingOne}
                <br />
                {props.headingTwo}
              </strong>
            </h1>
            <p className="m-b-40">{props.subHeading}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

Slide.propTypes = {
  backgroundImagePath: PropTypes.string,
  backgroundImageAltText: PropTypes.string,
  headingOne: PropTypes.string,
  headingTwo: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Slide;
