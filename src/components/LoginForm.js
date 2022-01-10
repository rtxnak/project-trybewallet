import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  render() {
    const { email, password, loginSubmit, onChange } = this.props;
    return (
      <form>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ onChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="text"
            data-testid="password-input"
            value={ password }
            onChange={ onChange }
          />
        </label>

        <button
          type="button"
          onClick={ loginSubmit }
        >
          Entrar
        </button>

      </form>
    );
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;
