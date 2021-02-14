import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles["footer-area"]} ${styles["bg-f"]}`}>
      <div className={`container ${styles["container"]}`}>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>Brand</h3>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Contact Us</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Products</h3>
            <p>
              <Link href="/gravies">
                <a>Masti Malai (White Gravy)</a>
              </Link>
            </p>
            <p>
              <Link href="/gravies">
                <a>Shahi Dawat (Yellow Gravy)</a>
              </Link>
            </p>
            <p>
              <Link href="/gravies">
                <a>Makhani Masala (Red Gravy)</a>
              </Link>
            </p>
            <p>
              <Link href="/breakfast">
                <a>Multi-Breakfast Mix</a>
              </Link>
            </p>
            <p>
              <Link href="/breakfast">
                <a>Poha Mix</a>
              </Link>
            </p>
            <p>
              <Link href="/breakfast">
                <a>Sambar Mix</a>
              </Link>
            </p>
          </div>
          <div className="col-lg-3 col-md-6"></div>
          <div className="col-lg-3 col-md-6">
            <h3>Follow Us</h3>
            <ul className={`list-inline ${styles["f-social"]}`}>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles["copyright"]}>
        <div className={`container ${styles["container"]}`}>
          <div className="row">
            <div className="col-lg-12">
              <p className={styles["company-name"]}>All Rights Reserved. &copy; 2021 Truly Homemade</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
