(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('todoListController', todoListController)

    function todoListController(todoService) {
        var vm = this;

        vm.todos = [];
        vm.getTodos = getTodos;
        vm.deleteTodo = deleteTodo;
        vm.updateTodo = updateTodo;

        /* Getting all the todos from the todoService */
        // TODO: Handle the HTTP Callbacks (error and success)
        function getTodos() {
            vm.todos = todoService.getTodos();
            console.log(vm.todos);
        }

        function updateTodo(todo) {
            todoService.updateTodo(todo);
        }

        function deleteTodo(todo) {
            todoService.deleteTodo(todo);
        }

        vm.getTodos();
    }
})();
