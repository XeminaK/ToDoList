"use strict";
function TodoController() {
    const vm = this;
    vm.tasks  = [
        { task: "Submit a lab", completed: false},
        { task: "Go to class", completed: true},
        { task: "Pass the quiz on Monday", completed: false},
        { task: "Learned angular.JS today", completed: true},
    ];
    vm.add = function(newTask) {
        vm.tasks.push(angular.copy(newTask));
        vm.newTask = {};
    }
    vm.removeTask = function(index) {
        vm.tasks.splice(index, 1);
    }
    vm.completeTask = function(index) {
        let i = index;
        vm.tasks[i].completed = true;
    } 
}







angular
.module("todoApp")
.controller("TodoController", TodoController);