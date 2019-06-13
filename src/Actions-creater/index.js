export function getList() {
  return {
    type: "GET_LIST"
  };
}

export function removeMovieFromMyList(id) {
  return {
    type: "REMOVE_MOVIE_FROM_MYLIST",
    id: id
  };
}

export function addMovieToMyList(id) {
  return {
    type: "ADD_TO_MYLIST",
    id: id
  };
}
