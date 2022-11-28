import background from "../images/PastedGraphic7.png";

export default function Heading() {
  return (
    <div
      className="uk-section uk-container uk-background-image@m uk-background-contain uk-background-muted"
      style={{ backgroundImage: `url(${background})` }}>
      <div
        className="uk-child-width-1-2@m uk-flex-between uk-flex-middle"
        data-uk-grid="true">
        <div className="uk-flex uk-flex-column">
          <p
            className="Abril"
            style={{
              fontSize: "52pt",
              maxWidth: "512px",
              lineHeight: "120%"
            }}>
            We Specialise in All Aspects of Law
          </p>
          <a
            className="uk-link uk-margin-medium-bottom uk-border-rounded uk-background-primary uk-light uk-padding-small"
            href="#action">
            Hire an Expert
          </a>
          <p style={{ fontSize: "16pt", maxWidth: "384px" }}>
            We offer flexible payment structures and fee plans. We are one of
            the largest criminal defence teams.
          </p>
        </div>
        <p style={{ maxWidth: "256px" }}>
          Our lawyers have over 60 years of combined experience. We have
          defended clients on over 10,000 criminal cases.
        </p>
      </div>
    </div>
  );
}
