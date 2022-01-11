const API = 'https://economia.awesomeapi.com.br/json/all';

const fetchAwesomeApi = async () => {
  const response = await fetch(API);
  const data = await (response.json());
  return data;
};

export default fetchAwesomeApi;
