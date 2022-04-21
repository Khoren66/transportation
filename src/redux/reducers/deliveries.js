export const GET_DELIVERY = "GET_DELIVERY";
const SET_DELIVERY = "SET_DELIVERY";

export const getDelivery = () => ({
  type: GET_DELIVERY,
});

export const setDelivery = (delivery) => ({
  type: SET_DELIVERY,
  delivery,
});

const initialState = {
  delivery: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DELIVERY:
      const { delivery } = action;
      return { ...state, delivery };
    default:
      return state;
  }
};
