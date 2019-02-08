"use strict";
function TodoController() {
    const vm = this;
    vm.tasks  = [
        { task: "Submit a lab", completed: false},
        { task: "Go to class", completed: true},
        { task: "Pass the quiz on Monday", completed: false},
        { task: "Learned angular.JS today", completed: true},
    ];
   
}







angular
.module("todoApp")
.controller("TodoController", TodoController);