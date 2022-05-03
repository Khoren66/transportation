import { call, put } from "redux-saga/effects";
import { setDeliveries } from "../../reducers/deliveries";
import { requestGetDeliveries } from "../requests/delivery";

export function* handleGetDeliveries(action) {
  try {
    const response = yield call(requestGetDeliveries);
    // console.log(response, "RESPONSE, IN HANDLER");
    const { data } = response;
    yield put(setDeliveries(data));
  } catch (error) {
    console.log(error);
  }
}
