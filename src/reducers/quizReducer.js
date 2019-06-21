const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_QUESTIONS_STARTED":
      return { ...state, loading: true };
    case "FETCH_QUIZ_DATA_COMPLETE":
      return { ...state, ...action.payload };
    case "FETCH_QUIZ_DATA_ERROR":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default quizReducer;
