import React from 'react';


class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      sitter_id: this.props.match.params.sitter_id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSitter(this.props.match.params.sitter_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state).then( booking => {
      this.props.history.push('/');
    }, errors => {
      debugger
    });
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }


  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="booking-form">

          <input type="date" value={this.state.start_date} onChange={this.handleChange("start_date")}/>
          <input type="date" value={this.state.end_date} onChange={this.handleChange("end_date")}/>

          <input type="submit" className="submit-booking-form" value="submit"/>

        </form>

      </div>
    );
  }
}

export default BookingForm;
