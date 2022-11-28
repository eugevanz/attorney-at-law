import business from "../icons/business_black_24dp.svg";
import gavel from "../icons/gavel_black_24dp.svg";
import family from "../icons/family_restroom_black_24dp.svg";

export default function Services() {
  return (
    <div className="uk-section uk-container uk-margin">
      <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-padding-large">
        <div
          className="uk-child-width-expand uk-flex-column uk-flex-middle"
          data-uk-grid="true">
          <p
            className="uk-text-center@m Abril"
            style={{ fontSize: "30pt", maxWidth: "768px" }}>
            The virtue of justice consists in moderation as regulated by wisdom
          </p>
          <div
            className="data-uk-grid-match uk-child-width-1-3@m"
            data-uk-grid="true">
            <div>
              <img
                src={`${business}`}
                width="40"
                height="40"
                alt="business"
                data-uk-svg="true"
              />
              <p className="uk-text-bold" style={{ fontSize: "16pt" }}>
                Business Law
              </p>
              <p>
                There are various forms of legal entities ranging from the sole
                trader.
              </p>
            </div>
            <div>
              <img
                src={`${gavel}`}
                width="40"
                height="40"
                alt="criminal"
                data-uk-svg="true"
              />
              <p className="uk-text-bold" style={{ fontSize: "16pt" }}>
                Criminal Law
              </p>
              <p>
                Criminal law is the body of law that relates to crime conduct
                perceived as threatening or harmful.
              </p>
            </div>
            <div>
              <img
                src={`${family}`}
                width="40"
                height="40"
                alt="family"
                data-uk-svg="true"
              />
              <p className="uk-text-bold" style={{ fontSize: "16pt" }}>
                Family Law
              </p>
              <p>
                Family law is a practice area that focuses on issues involving
                family relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
