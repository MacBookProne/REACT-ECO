"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

var _reducers = require("./todos/reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = {
  todos: _reducers.todos
};
var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  stateReconciler: _autoMergeLevel["default"]
};
var rootReducer = (0, _redux.combineReducers)(reducers);
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

var configureStore = function configureStore() {
  return (0, _redux.createStore)(persistedReducer);
};

exports.configureStore = configureStore;