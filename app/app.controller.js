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
    }


    // vm.add = function(newContact){
    //     vm.contacts.push(angular.copy(newContact)); 
    //     console.log(newContact);
    //     vm.newContact = {};
    // };
   
}







angular
.module("todoApp")
.controller("TodoController", TodoController);