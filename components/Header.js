import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const links = [
    { name: "Home", path: "/", hasSlides: true },
    { name: "Instant Gravies", path: "/gravies", hasSlides: false },
    { name: "Breakfast Mixes", path: "#", hasSlides: false },
    { name: "About", path: "/about", hasSlides: false },
    { name: "Contact", path: "#", hasSlides: false },
  ];
  const router = useRouter();
  const currentRoute = router.pathname;
  const currentRouteDetails = links.find((link) => link.path === currentRoute);
  const currentRouteHasSlides = currentRouteDetails && currentRouteDetails.hasSlides;
  const navClasses = classNames("navbar", "navbar-expand-lg", "navbar-light", {
    whitebg: !currentRouteHasSlides || isPageScrolled,
  });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header className="top-navbar">
      <nav className={navClasses}>
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img
                src={`images/th-logo-${!currentRouteHasSlides || isPageScrolled ? "regular" : "white"}.png`}
                width="180"
                alt="Truly Homemade brand logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbars-rs-food"
            aria-controls="navbars-rs-food"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbars-rs-food">
            <ul className="navbar-nav ml-auto">
              {links.map((link) => (
                <li className={`nav-item ${link.path === currentRoute ? "active" : ""}`} key={link.name}>
                  <Link href={link.path}>
                    <a className="nav-link">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
