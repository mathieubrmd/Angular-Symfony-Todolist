(function() {
  'use strict';

  angular
    .module('todoApp')
    .service('todoService', todoService)

  function todoService() {
    /* The todos array */
    // TODO: Replace the fake todos with an API call
    var todos = [
      {
        title: 'Acheter du pain',
        description: 'Pour le repas du soir',
        dueDate: Date.now(),
        isDone: false
      },
      {
        title: 'Faire un saut en parachute',
        description: 'En haut du mont blanc',
        dueDate: Date.now(),
        isDone: true
      },
      {
        title: 'Louer une ferrari',
        description: 'Faire un tour sur le circuit de Fontenay le compte',
        dueDate: Date.now(),
        isDone: false
      },
      {
        title: 'Acheter 32kg de viande',
        description: 'Pour le repas du soir',
        dueDate: Date.now(),
        isDone: true
      },
    ];

    // TODO: use a POST HTTP query to the REST API
    this.addTodo = function(newTodo) {
      todos.push(newTodo);
      console.log("Todo added!");
    }

    // TODO: use an UPDATE HTTP query to the REST API
    this.updateTodo = function(todo) {
      
    }

    // TODO: use a DELETE HTTP query to the REST API
    this.deleteTodo = function(todo) {
      var index = todos.indexOf(todo);

      if (index > -1) {
        todos.splice(index, 1);
      }
    }

    // TODO: use a GET * HTTP query the REST API
    this.getTodos = function() {
      console.log("Getting todos");
      return todos;
    }

  }
})();
