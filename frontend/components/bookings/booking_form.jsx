import React from 'react';


class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      sitter_id: this.props.match.params.sitter_id,
    };

    if (this.props.currentUser) {
      this.address = this.props.currentUser.address;
    } else {
      this.address = "10018";
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSitter(this.props.match.params.sitter_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state).then( booking => {
      this.props.history.push('/');
    });
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }


  render () {
    return (
      <div className="form-box-booking">

        <div className="booking-form-box">
          <div className="sidebar-main">

            <form onSubmit={this.handleSubmit} className="booking-form">
              <div className="search-section">
                <div className="heading">
                  Service Type
                </div>
              </div>

              <div className="search-service">
                Dog Sitting at the Sitter's Home
              </div>

              <div className="search-section">
                <div className="heading">
                  Dog Sitting near
                </div>
                <input
                  type="text"
                  value={this.address}
                  onChange={this.handleChange(this.address)}
                  className="form-control"
                  />
              </div>
              <div>
                <div>
                  <div className="search-section">
                    <div className="heading">
                      Dates
                    </div>
                    <div className="search-date-view">
                      <div className="date-range-picker">

                        <div className="date-box">
                          <div className="input-group-wrapper">
                            <div className="input-group">

                              <input
                                type="date"
                                value={this.state.start_date}
                                onChange={this.handleChange("start_date")}
                                className="date"
                                />
                            </div>
                          </div>
                        </div>
                        <div className="date-picker-control-divider">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                        <div className="date-box">
                          <div className="input-group-wrapper">
                            <div className="input-group">

                              <input
                                type="date"
                                value={this.state.end_date}
                                onChange={this.handleChange("end_date")}
                                className="date"
                                />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit"
                  className="submit-booking-form-button button"
                  value="Submit"
                  />
              </div>


            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default BookingForm;
