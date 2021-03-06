import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      address: "",
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/login');
    }
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'login') {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    } else {
      const formData = new FormData();
      formData.append("user[username]", this.state.username);
      formData.append("user[address]", this.state.address);
      formData.append("user[email]", this.state.email);
      formData.append("user[password]", this.state.password);
      if (this.state.imageFile) {
        formData.append("user[image]", this.state.imageFile);
      }
      this.props.processForm(formData);
    }
  }


  renderSignupFields() {
    if (this.props.formType === 'signup' ) {
      return (
        <ul>
          <label className = "session-form-label">Name:
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>

          <br />

          <label className = "session-form-label">Zip Code:
            <br />
            <input
              type="text"
              value={this.state.address}
              onChange={this.update('address')}
              className="login-input"
            />
          </label>

          <br />

          <label className = "session-form-label">Email:
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>

          <br />

          <label className = "session-form-label">Create a password:
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>

          <label className = "session-form-label">Upload a Profile Picture:
            <br />
            <input
              type="file"
              onChange={this.updateFile}
              className="login-input"
            />
          </label>
          <img src={this.state.imageUrl} />
        </ul>
      );
    }
  }

  renderSigninFields() {
    if (this.props.formType === 'login' ) {
      return (
        <ul>
          <label className = "session-form-label">Email:
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>

          <br />

          <label className = "session-form-label">Password:
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>

        </ul>
      );
    }
  }

  renderFinePrint() {
    if (this.props.formType === 'signup' ) {
      return (
        <div>
          <p className="fine-print">
            Already have a Baxter account?
            &nbsp;
            <Link className="signinLink" to="/login">Sign in now</Link>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p className="fine-print">
            Don't have a Baxter account?
            &nbsp;
            <Link className="signinLink" to="/signup">Sign up now</Link>
          </p>
        </div>
      );
    }
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
    const text = this.props.formType === 'login' ? "Sign In" : "Sign Up";
    const title = this.props.formType === 'login' ? "Sign In to Baxter" : "Sign Up for Baxter";

    return (
      <div className="login-form-container">

        <div className="primary-content-block">

          <div className="form-box">
            <div className="form">
              <div className="padding-form">
                <header className="page-header">
                  <h1 className="header-title">
                    <span>
                      {title}
                    </span>
                  </h1>
                </header>

                <form onSubmit={this.handleSubmit} className="login-form-box">

                  {this.renderErrors()}

                  <div className="login-form">

                    {this.renderSignupFields()}

                    {this.renderSigninFields()}

                    <br/>

                    <input className="form-submit-button" type="submit" value={text} />

                  </div>

                  <br />

                  {this.renderFinePrint()}

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
