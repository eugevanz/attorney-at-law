export default function Navbar() {
  return (
    <div data-uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav
        className="uk-navbar-container"
        data-uk-navbar="true"
        style={{ position: "relative", zIndex: 980 }}>
        <div className="uk-navbar-left uk-container">
          <div
            className="uk-navbar-item uk-logo"
            href="#logo"
            aria-label="Back to Home">
            Attorney@Law
          </div>
        </div>

        <div className="uk-navbar-right uk-container">
          <ul className="uk-navbar-nav uk-visible@m Oswald">
            <li>
              <a href="#href">Home</a>
            </li>
            <li>
              <a href="#href">About Us</a>
            </li>
            <li>
              <a href="#href">Find a lawyer</a>
            </li>
            <li>
              <a href="#href">Contact us</a>
            </li>
            <li
              className="uk-background-secondary uk-light"
              style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              <a href="#href">Sign Up</a>
            </li>
          </ul>
          <div className="uk-hidden@m">
            <a
              className="uk-navbar-toggle uk-navbar-toggle-animate"
              uk-navbar-toggle-icon="true"
              href="#toggle">
              &nbsp;
            </a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav Oswald">
                <li>
                  <a href="#href">Home</a>
                </li>
                <li>
                  <a href="#href">About Us</a>
                </li>
                <li>
                  <a href="#href">Find a lawyer</a>
                </li>
                <li>
                  <a href="#href">Contact Us</a>
                </li>
                <li
                  className="uk-background-secondary uk-light"
                  style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                  <a href="#href">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
