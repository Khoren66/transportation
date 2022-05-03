import { takeLatest } from "redux-saga/effects";
import { handleGetDeliveries } from "./handlers/delivery";
import { GET_DELIVERIES } from "../reducers/deliveries";

export function* watcherSaga() {
  yield takeLatest(GET_DELIVERIES, handleGetDeliveries);
}
