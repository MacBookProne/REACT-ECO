"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todos = void 0;

var _actions = require("./actions");

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case _actions.CREATE_TODO:
      {
        var text = payload.text;
        var newTodo = {
          text: text,
          isCompleted: false
        };
        return state.concat(newTodo);
      }

    case _actions.REMOVE_TODO:
      {
        var _text = payload.text;
        return state.filter(function (todo) {
          return todo.text !== _text;
        });
      }

    default:
      return state;
  }
};

exports.todos = todos;