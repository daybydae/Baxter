import React from 'react';
import { Link } from 'react-router-dom';
import SitterDetail from './sitter_detail';
import SitterPreferences from './sitter_preferences';
import SitterAbout from './sitter_about';
import SitterReviews from './sitter_reviews';

class SitterShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSitter(this.props.match.params.sitterId);
  }

  render () {
    return (

      <div className="main-content-sitter-show">
        {
        //  <div className="fixed-contact-bar">
        //
        //  </div>
        //
        }

        <div className="hero-container">
          <div className="member-profile-hero-wrap">
            <div className="member-profile-photos-row-row">

              <div className="member-profile-photos-row">
                <div className="member-profile-photos-col">
                  <div className="hero-image" style={{backgroundImage: `url(${this.props.sitter.image_url})`}}>
                  </div>

                </div>
              </div>

              <div className="member-profile-details-col">

                  <SitterDetail
                    sitter={this.props.sitter}
                  />

              </div>
            </div>
          </div>
        </div>

        <div className="member-profile-bottom-half">
          <div className="member-profile-bottom-half-container">
            <div className="member-profile-primary-wrap">
              <div className="member-profile-bottom-half-row">
                <div className="col-right">
                  <section className="dog-preferences">

                  </section>
                  <section className="availability">

                  </section>
                </div>
                <div className="col-left">
                  <section className="reviews">
                    {
                      //<SitterReviews
                      //  sitter={this.props.sitter}
                      //  />

                    }
                  </section>
                  <section className="about">
                      <SitterAbout
                       sitter={this.props.sitter}
                       />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default SitterShow;
