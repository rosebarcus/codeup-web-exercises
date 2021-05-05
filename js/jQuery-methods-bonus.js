"use strict";

$(document).ready(function(){
    $('button').click(function(){
        var nextImage = $(this).parent().next().children().first();
        var nextImageSrc = nextImage.attr('src');
        var thisSrc = $(this).prev().attr('src');
        $(this).prev().attr('src', nextImage);
        nextImage.attr('src', thisSrc);

    });
    // missing the middle button here

    $('#button-3').click(function(){
        var previousImage = $(this).parent().prev().children().first();
        var previousImageSrc = previousImage.attr('src');
        var thisImage = $(this).prev();
        var thisSrc = thisImage.attr('src', thisSrc);
        previousImage.attr('src', thisSrc);
        thisImage.attr('src', previousImage);
    });
});