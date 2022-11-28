import background from "../images/PastedGraphic8.png";

export default function SubHeading() {
  return (
    <div
      className="uk-section uk-container uk-margin uk-background-image@m uk-background-center-left uk-background-contain"
      style={{ backgroundImage: `url(${background})` }}>
      <div className="uk-flex uk-flex-right@m">
        <div className="uk-flex uk-flex-column uk-width-2-3@m">
          <p className="Abril" style={{ fontSize: "30pt" }}>
            If you are in trouble, our lawyers can guide you
          </p>
          <p style={{ fontSize: "16pt" }}>
            An attorney does not only represent their client in civil and
            criminal proceedings but can also be charged with the duty of
            drafting various documents such as wills, contracts, registering
            companies, trademarks and the transfer of immovable property.
          </p>
          <a
            className="uk-link uk-margin uk-background-primary uk-border-rounded uk-light uk-padding-small"
            href="#action">
            Hire an Expert
          </a>
        </div>
      </div>
    </div>
  );
}
