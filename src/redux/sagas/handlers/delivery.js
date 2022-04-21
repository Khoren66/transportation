import { call, put } from "redux-saga/effects";
import { setDelivery } from "../../reducers/deliveries";
import { requestGetDelivery } from "../requests/delivery";

export function* handleGetDelivery(action) {
  try {
    const response = yield call(requestGetDelivery);
    const { data } = response;
    yield put(setDelivery(data));
  } catch (error) {
    console.log(error);
  }
}
