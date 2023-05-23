/*
Author: Alex Hernandez
Created: May 22, 2023
*/

function sortingHat(str){
    len = str.length;
    mod = len % 4;
    if (mod == 0){
        return "Gryffindor";
    }
    else if (mod == 1){
        return "Ravenclaw";
    }
    else if (mod == 2){
        return "Hufflepuff";
    }
    else if (mod == 3){
        return "Slytherin";
    }
}

$("#button").click(function() {
    var name = $("#input").val();
    var house = sortingHat(name);

    $("#output").append("<p class='result'> The Sorting Hat has sorted you into" + house + ".</p>")
})