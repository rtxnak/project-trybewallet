import fetchAwesomeApi from '../services/Api';

export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const userLogin = (email) => ({ type: USER_LOGIN, email });

export const addExpense = (expenses, currencies) => ({
  type: ADD_EXPENSE,
  expenses,
  currencies,
});

export const addExpenseThunk = (expenses) => async (dispatch) => {
  const currencies = await fetchAwesomeApi();
  // console.log(currencies);
  dispatch(addExpense(expenses, currencies));
};

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const fetchResult = await fetchAwesomeApi();
  // console.log(fetchResult);
  const fetchArray = Object.keys(fetchResult);
  // console.log(fetchArray);
  const USDT = fetchArray.indexOf('USDT');
  fetchArray.splice(USDT, 1);
  // console.log(fetchArray);
  dispatch(getCurrencies(fetchArray));
};

// remover item especifico de um array , utilizado a seguinte referencia: https://pt.stackoverflow.com/questions/241823/como-remover-um-item-de-um-array-sem-conhecer-o-%C3%ADndice-apenas-o-valor
