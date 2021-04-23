"use strict";


    var titleChange = function () {
        document.querySelector("#main-header").innerHTML = "Javascript is so cool";
        this.innerHTML = "Rose is getting a hang of this DOM event thing..."
    }

    var taskOne = document.querySelector("#main-header");

    taskOne.addEventListener("click", titleChange);
