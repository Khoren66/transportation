import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import deliveryReducer from "./reducers/deliveries";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  deliveriesList: deliveryReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
