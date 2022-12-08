import produce from "immer";
export default function reserve(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVE":
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.item.id);

        if (itemIndex >= 0) {
          draft[itemIndex].amount += 1;
          draft[itemIndex].total =
            parseFloat(action.item.price) * parseFloat(draft[itemIndex].amount);
        } else {
          draft.push({
            ...action.item,
            amount: 1,
            total: parseFloat(action.item.price),
          });
        }
      });
    case "DELETE_RESERVE":
      return produce(state, (draft) => {
        const itemIndex = draft.findIndex((item) => item.id === action.id);
        if (itemIndex >= 0) {
          draft[itemIndex].amount -= 1;
          draft[itemIndex].total -= parseFloat(draft[itemIndex].price);
          if (draft[itemIndex].amount === 0) {
            draft.splice(itemIndex, 1);
          }
        }
      });
    default:
      return state;
  }
}
