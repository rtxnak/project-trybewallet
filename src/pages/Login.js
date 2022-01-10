import React from 'react';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.loginSubmitFunction = this.loginSubmitFunction.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  onInputChange({ target }) {
    const { id } = target;
    const { value } = target;
    this.setState({
      [id]: value,
    });
  }

  loginSubmitFunction = () => {
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <LoginForm
          email={ email }
          password={ password }
          loginSubmit={ this.loginSubmitFunction }
          onChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default Login;
