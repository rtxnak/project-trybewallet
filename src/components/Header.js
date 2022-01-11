import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  sumExpenses = (expenses) => expenses.reduce((acc, curr) => {
    acc += parseFloat(curr.value * curr.exchangeRates[curr.currency].ask);
    return acc;
  }, 0).toFixed(2)

  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    // console.log(expenses.map((expense) => (expense.exchangeRates[expense.currency])));
    // console.log(expenses.map((expense) => (expense.exchangeRates)));
    const { sumExpenses } = this;
    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total: R$
          { sumExpenses(expenses) }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
