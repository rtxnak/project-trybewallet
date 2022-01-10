import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.loginSubmitFunction = this.loginSubmitFunction.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  passwordValidation = (password) => {
    const PASSWORDLENGTH = 6;
    return password.length >= PASSWORDLENGTH;
  }

  emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // informação de validacao de email por regex https://stackoverflow.com/a/9204568

  formValidation = (email, password) => {
    const { emailValidation, passwordValidation } = this;
    if (emailValidation(email) && passwordValidation(password)) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { id } = target;
    const { value } = target;
    this.setState({
      [id]: value,
    });
  }

  loginSubmitFunction = () => {
    const { history } = this.props;
    console.log(this.state);
    history.push('/carteira');
  }

  // history.push retirado do exercicio exercise-forms-redux

  render() {
    const { email, password } = this.state;
    const { loginSubmitFunction, onInputChange, formValidation } = this;
    return (
      <div>
        <LoginForm
          email={ email }
          password={ password }
          loginSubmit={ loginSubmitFunction }
          onChange={ onInputChange }
          disabled={ formValidation(email, password) }
        />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
