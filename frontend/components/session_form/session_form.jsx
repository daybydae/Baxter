import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Sign In</Link>;
    }
  }

  renderSignupFields() {
    if (this.props.formType === 'signup' ) {
      return (
        <ul>
          <label>Name:
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>

          <br />

          <label>Zip Code:
            <br />
            <input
              type="text"
              value={this.state.address}
              onChange={this.update('address')}
              className="login-input"
            />
          </label>

          <br />

          <label>Email:
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>

          <br />

          <label>Create a password:
            <br />
            <input
              type="text"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>

        </ul>
      );
    }
  }

  renderSigninFields() {
    if (this.props.formType === 'login' ) {
      return (
        <ul>
          <label>Email:
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>

          <br />

          <label>Password:
            <br />
            <input
              type="text"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>

        </ul>
      );
    }
  }

  renderErrors() {
    if (this.props.errors !== null ) {
      return (
        <ul>
          {
            this.props.errors.map( (error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    const text = this.props.formType === 'login' ? "Sign In" : "Sign Up";

    return (
      <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">

          Welcome to Baxter!
          <br/>
          Please {text} or {this.navLink()}

          {this.renderErrors()}

          <div className="login-form">

            <br/>



            <br/>

            {this.renderSignupFields()}

            <br />

            {this.renderSigninFields()}

            <br/>

            <input type="submit" value={text} />

          </div>

        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
