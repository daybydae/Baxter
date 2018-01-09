import React from 'react';
import { Link } from 'react-router-dom';

const SitterReviews = ({ sitter }) => {

  return (
    <div className="sitter-reviews-wrap">
      <div className="section-row">
        <div className="section-col-main">
          <h2 className="about-title">
            Reviews
          </h2>
        </div>
      </div>
      <div className="section-row">
        <div className="section-col-main">
          <div className="reviews-wrap">

            <div className="review">
              <header className="review-header margin-bottom-x2">
                <div className="fluid-row">
                  <div className="fluid-col">
                    <div className="media">
                      <div className="pull-left">
                        {
                        // <img
                        //   className="profile-icon"
                        //   src={this.props.currentUser.image_url}
                        //   />
                        }
                      </div>

                      <div className="media-body text-muted">
                        <div>
                          {
                            //reviewer name
                          }
                        </div>
                        <div className="text-muted">
                          {
                            //{review.date}
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="review-body">
                <div className="review-description">
                  <p>
                    {
                    // review.description
                    }
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterReviews;
