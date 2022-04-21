import { takeLatest } from "redux-saga/effects";
import { handleGetDelivery } from "./handlers/delivery";
import { GET_DELIVERY } from "../reducers/deliveries";

export function* watcherSaga() {
  yield takeLatest(GET_DELIVERY, handleGetDelivery);
}
