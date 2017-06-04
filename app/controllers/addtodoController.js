/* Avoid declaration in the global scope */
(function() {
  'use strict';

  angular
    .module('todoApp')
    .controller('addTodoController', addTodoController)

  function addTodoController($scope, $log, todoService) {
    /* Instead of using the this keyword we use a var
     * "Why?: The this keyword is contextual and when used within a function inside a controller
     * may change its context. Capturing the context of this avoids encountering this problem."
     */
    var vm = this;
    vm.saveTodo = saveTodo;

    /*
     * The todo object
     * This object is bound to the add todo form inputs
     */
    vm.todo = {
      title: '',
      description: '',
      dueDate: null,
      isDone: false,
    };

    function saveTodo() {
      /* This if statement is checking if the required filled are valid */
      if (vm.todo.title != '' && vm.todo.description != '' && vm.todo.dueDate != null) {

        $scope.todoForm.$setPristine();
        $scope.todoForm.$setUntouched();

        /*
         * Sending the todo to the todoService
         * We send a new object, we don't want to send the actual vm.todo object
         * Otherwise we would override the objects that we passed with the new values
         */
        todoService.addTodo({
          title: vm.todo.title,
          description: vm.todo.description,
          dueDate: vm.todo.dueDate,
          isDone: vm.todo.isDone
        });

        /* Resetting the todo values */
        vm.todo.title = '';
        vm.todo.description = '';
        vm.todo.dueDate = '';
        vm.todo.isDone = false;

      } else {
        /* Just an alert telling the user that he failed filling the form */
        swal({
          title: "Oops! Something's wrong!",
          text: "Please fill the form correctly and try again!",
          type: "error",
          confirmButtonText: "Ok"
        });
      }
    };
  }
})();
