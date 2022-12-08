export function addReserve(item) {
  return {
    type: "ADD_RESERVE",
    item,
  };
}

export function deleteReserve(id) {
  return {
    type: "DELETE_RESERVE",
    id,
  };
}
