import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { merge } from 'lodash';
import UserShow from './user_show';
import { updateUser } from '../../actions/user_actions';

class UserShowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.updateUser(this.state);
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    if (this.props.errors !== null ) {
      return (
        <ul className="session-errors">
          {
            this.props.errors.map( (error, i) => (
              <li className="errors" key={`error-${i}`}>
                {error}
              </li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="description-form">

        <h3 className="description-header">
          Add a Description
        </h3>


        <form onSubmit={this.handleSubmit} className="add-description-form">

          <textarea className="description-text" onChange={this.update("description")}>

          </textarea>


          <input className="form-submit-button-user" type="submit" />


        </form>
      </div>
    );
  }
}
export default withRouter(UserShowForm);
