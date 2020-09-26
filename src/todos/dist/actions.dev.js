"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeTodo = exports.REMOVE_TODO = exports.createTodo = exports.CREATE_TODO = void 0;
var CREATE_TODO = 'CREATE_TODO';
exports.CREATE_TODO = CREATE_TODO;

var createTodo = function createTodo(text) {
  return {
    type: CREATE_TODO,
    payload: {
      text: text
    }
  };
};

exports.createTodo = createTodo;
var REMOVE_TODO = 'REMOVE_TODO';
exports.REMOVE_TODO = REMOVE_TODO;

var removeTodo = function removeTodo(text) {
  return {
    type: REMOVE_TODO,
    payload: {
      text: text
    }
  };
};

exports.removeTodo = removeTodo;