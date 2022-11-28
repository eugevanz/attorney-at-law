import avatar1 from "../images/philip-martin-5aGUyCW_PJw-unsplash.jpg";
import avatar2 from "../images/prince-akachi-J1OScm_uHUQ-unsplash.jpg";

export default function Testimonials() {
  return (
    <div className="uk-section uk-container uk-margin-xlarge">
      <div className="uk-child-width-expand@m" data-uk-grid="true">
        <div>
          <p className="Abril" style={{ fontSize: "30pt" }}>
            Hear what our Customers have to Say
          </p>
        </div>

        <div>
          <article className="uk-comment" data-role="comment">
            <header className="uk-comment-header">
              <div
                className="uk-grid-medium uk-flex-middle"
                data-uk-grid="true">
                <div className="uk-width-auto">
                  <img
                    className="uk-comment-avatar"
                    src={`${avatar1}`}
                    width="80"
                    height="80"
                    alt=""
                  />
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-comment-title uk-margin-remove">
                    <a className="uk-link-reset" href="#author">
                      AC Farnborough
                    </a>
                  </h4>
                  <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li>
                      <a href="#title">Marketing Officer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div className="uk-comment-body">
              <i>
                I am grateful that you managed to negotiate an improved
                settlement for me, rather than just advising me to accept the
                initial offer.
              </i>
            </div>
          </article>
        </div>

        <div>
          <article className="uk-comment" data-role="comment">
            <header className="uk-comment-header">
              <div
                className="uk-grid-medium uk-flex-middle"
                data-uk-grid="true">
                <div className="uk-width-auto">
                  <img
                    className="uk-comment-avatar"
                    src={`${avatar2}`}
                    width="80"
                    height="80"
                    alt=""
                  />
                </div>
                <div className="uk-width-expand">
                  <h4 className="uk-comment-title uk-margin-remove">
                    <a className="uk-link-reset" href="#author">
                      JL Guildford
                    </a>
                  </h4>
                  <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li>
                      <a href="#title">Operations Developer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div className="uk-comment-body">
              <i>
                I write to express my sincere and heartfelt appreciation and
                gratitude for your highly professional and competent services,
                provided in both a friendly and accessible manner.
              </i>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
