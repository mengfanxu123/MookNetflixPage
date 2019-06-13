import data from "../Data/data";

const initState = {
  myList: data.mylist,
  recommendations: data.recommendations
};
const myList = (state = initState, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        myList: state.myList,
        recommendations: state.recommendations
      };
    case "REMOVE_MOVIE_FROM_MYLIST":
      return {
        myList: [
          ...state.myList.slice(0, action.id),
          ...state.myList.slice(action.id + 1)
        ],
        recommendations: [...state.recommendations, state.myList[action.id]]
      };
    case "ADD_TO_MYLIST":
      return {
        myList: [...state.myList, state.recommendations[action.id]],
        recommendations: [
          ...state.recommendations.slice(0, action.id),
          ...state.recommendations.slice(action.id + 1)
        ]
      };
    default:
      return state;
  }
};

export default myList;
