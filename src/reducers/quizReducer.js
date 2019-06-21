const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_QUESTIONS_STARTED":
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default quizReducer;
