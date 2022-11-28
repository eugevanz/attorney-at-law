import background from "../images/PastedGraphic10.png";

export default function Services2() {
  return (
    <div
      className="uk-section uk-container uk-margin-xlarge uk-background-image@m uk-background-contain"
      style={{ backgroundImage: `url(${background})` }}>
      <div
        className="uk-child-width-expand@m uk-flex-between uk-flex-middle"
        data-uk-grid="true">
        <div className="uk-flex uk-flex-column" style={{ maxWidth: "384px" }}>
          <p className="Abril" style={{ fontSize: "30pt" }}>
            We are Ready to provide the Best Service for our client
          </p>
          <p style={{ fontSize: "16pt" }}>
            Listening, understanding our customer's needs ensures we prome a
            positive, helpful and friendly environment which always leaves a
            great impression.
          </p>
          <a
            className="uk-link uk-margin uk-background-primary uk-border-rounded uk-light uk-padding-small"
            href="#action">
            Hire an Expert
          </a>
        </div>

        <div
          className="uk-child-width-1-1"
          data-uk-grid="true"
          style={{ maxWidth: "256px" }}>
          <div>
            <span className="uk-text-bold" style={{ fontSize: "16pt" }}>
              Expert Lawyer
            </span>
            <p>
              One of the first things we will do is help you understand your
              rights.
            </p>
          </div>
          <div>
            <span className="uk-text-bold" style={{ fontSize: "16pt" }}>
              Allegations
            </span>
            <p>You have a right to know every detail of the allegations.</p>
          </div>
          <div>
            <span className="uk-text-bold" style={{ fontSize: "16pt" }}>
              Support
            </span>
            <p>Our team is available 24/7 to provide help and support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
