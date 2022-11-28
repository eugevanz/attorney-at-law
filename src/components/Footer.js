export default function Footer() {
  return (
    <div className="uk-card uk-card-secondary uk-border-rounded uk-card-body">
      <div class="uk-flex uk-flex-around uk-flex-wrap">
        <div className="uk-container uk-margin" style={{ maxWidth: "384px" }}>
          <p className="Abril" style={{ fontSize: "20pt" }}>
            Attorney@Law
          </p>
          <p>
            Our clients range from FTSE complains, to large organisations and
            small local businesses who are striving to expand.
          </p>
        </div>

        <div data-uk-grid="true">
          <div>
            <p className="uk-text-bold" style={{ fontSize: "16pt" }}>
              Practice Areas
            </p>
            <p>
              <button className="uk-button uk-button-text">
                Practice Areas
              </button>
              <br />
              <button className="uk-button uk-button-text">Our Firm</button>
              <br />
              <button className="uk-button uk-button-text">Careers</button>
              <br />
              <button className="uk-button uk-button-text">Attorneys</button>
              <br />
              <button className="uk-button uk-button-text">Case Result</button>
            </p>
          </div>
          <div>
            <p className="uk-text-bold" style={{ fontSize: "16pt" }}>
              Company
            </p>
            <p>
              <button className="uk-button uk-button-text">About Us</button>
              <br />
              <button className="uk-button uk-button-text">Contact Us</button>
              <br />
              <button className="uk-button uk-button-text">Career</button>
              <br />
              <button className="uk-button uk-button-text">
                Law Certification
              </button>
              <br />
              <button className="uk-button uk-button-text">Lawyer</button>
            </p>
          </div>
          <div>
            <p className="uk-text-bold" style={{ fontSize: "16pt" }}>
              South Africa
            </p>
            <p>
              1600 Ampitheatre Parkway
              <br />
              Mountain View GP
              <br />
              Tel: (123) 123-4567
              <br />
              Email: <span className="uk-link">your@mail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
