const urlToken = 'https://opentdb.com/api_token.php?command=request';

const requestFetch = (url) =>
  fetch(url).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export const fetchApiTriviaToken = () => {
  const token = requestFetch(urlToken);
  localStorage.setItem('token', token);
};

export const fetchApiTriviaQuestions = () => {
  const token = localStorage.getItem('token');
  const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return requestFetch(url);
};

export const fetchGravatar = (hash) => {
  const url = `https://www.gravatar.com/avatar/${hash}?d=https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3`;
  return requestFetch(url);
};
