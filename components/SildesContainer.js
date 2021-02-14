import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Slides.module.css";

function SlidesContainer(props) {
  const containerId = `slides_${props.name}`;

  useEffect(() => {
    $(`#${containerId}`).superslides({
      inherit_width_from: `.${styles["cover-slides"]}`,
      inherit_height_from: `.${styles["cover-slides"]}`,
      play: 0,
      animation: "fade",
      elements: {
        nav: `.${styles["slides-navigation"]}`,
        container: `.${styles["slides-container"]}`,
        pagination: `.${styles["slides-pagination"]}`,
        preserve: ".preserve",
      },
    });

    $(`.${styles["cover-slides"]} ul li`).append(`<div class="${styles["overlay-background"]}"></div>`);
  }, []);

  return (
    <div id={containerId} className={styles["cover-slides"]}>
      <ul className={styles["slides-container"]}>{props.children}</ul>
    </div>
  );
}

SlidesContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SlidesContainer;
