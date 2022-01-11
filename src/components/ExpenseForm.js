import React from 'react';
// import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      tag: 'Alimentação',
      method: 'Dinheiro',
      currency: 'USD',
    };
  }

  onInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  expenseSubmit = () => {
    console.log(this.state);
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const { onInputChange, expenseSubmit } = this;

    return (
      <form>

        <label htmlFor="value">
          Valor:
          <input
            id="value"
            name="value"
            type="text"
            value={ value }
            data-testid="value-input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            name="description"
            type="text"
            data-testid="description-input"
            value={ description }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ onInputChange }
          >
            <option
              value="USD"
              key={ 0 }
            >
              USD
            </option>
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            data-testid="method-input"
            value={ method }
            onChange={ onInputChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            name="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ onInputChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ expenseSubmit }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

// ExpenseForm.propTypes = {
//   value: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
//   method: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   expenseSubmit: PropTypes.func.isRequired,
// };

export default ExpenseForm;
