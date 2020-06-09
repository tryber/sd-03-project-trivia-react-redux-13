import { fetchApiTriviaQuestions } from '../services/apiRequest';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS_FAILURE = 'REQUEST_QUESTIONS_FAILURE';


const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});


const requestSuccess = (data) =>
  ({
    type: REQUEST_QUESTIONS_SUCCESS,
    data,
  });

const requestFailure = (error) => ({
  type: REQUEST_QUESTIONS_FAILURE,
  error,
});

export function requestFetch() {
  return (dispatch) => {
    dispatch(requestQuestions());
    return fetchApiTriviaQuestions()
      .then(
        (json) => dispatch(requestSuccess(json.results)),
        (error) => dispatch(requestFailure(error)),
      );
  };
}

