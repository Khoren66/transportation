export const GET_DELIVERIES = "GET_DELIVERIES";
const SET_DELIVERIES = "SET_DELIVERIES";

export const getDeliveries = () => ({
  type: GET_DELIVERIES,
});

export const setDeliveries = (deliveries) => ({
  type: SET_DELIVERIES,
  deliveries,
});

const initialState = {
  deliveries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DELIVERIES:
      const { deliveries } = action;
      return { ...state, deliveries };
    default:
      return state;
  }
};
