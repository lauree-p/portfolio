var linkAPropos = $( "#link-a-propos" );
var linkDeveloppement = $( "#link-developpement" );
var linkDesign = $( "#link-design" );
var aPropos = $( "#section1" );
var developpement = $( "#section2" );
var design = $( "#section3" );
var collapse1 = $( "#collapseOne");
var collapse2 = $( "#collapsTwo");
var collapse3 = $( "#collapseThree");
var title1 = $('#title-button1');
var title2 = $('#title-button2');
var title3 = $('#title-button3');

var title11 = $('#title-button11');
var title22 = $('#title-button22');
var title33 = $('#title-button33');


linkAPropos.on( "click", function( event ) {
    aPropos.addClass("show");
    developpement.removeClass("show").addClass("hide");
    design.removeClass("show").addClass("hide");
    linkAPropos.addClass("active");
    linkDeveloppement.removeClass("active");
    linkDesign.removeClass("active");
});

linkDeveloppement.on( "click", function( event ) {
    aPropos.removeClass("show").addClass("hide");
    developpement.addClass("show");
    design.removeClass("show").addClass("hide");
    linkAPropos.removeClass("active");
    linkDeveloppement.addClass("active");
    linkDesign.removeClass("active");
});

linkDesign.on( "click", function( event ) {
    aPropos.removeClass("show").addClass("hide");
    developpement.removeClass("show").addClass("hide");
    design.addClass("show");
    linkAPropos.removeClass("active");
    linkDeveloppement.removeClass("active");
    linkDesign.addClass("active");
});

title1.on( "click", function( event ) {
        title1.addClass("actived");
        title2.removeClass("actived");
        title3.removeClass("actived");
});

title2.on( "click", function( event ) {
    title1.removeClass("actived");
    title2.addClass("actived");
    title3.removeClass("actived");
});

title3.on( "click", function( event ) {
    title1.removeClass("actived");
    title2.removeClass("actived");
    title3.addClass("actived");
});



title11.on( "click", function( event ) {
    title11.addClass("actived");
    title22.removeClass("actived");
    title33.removeClass("actived");
});

title22.on( "click", function( event ) {
title11.removeClass("actived");
title22.addClass("actived");
title33.removeClass("actived");
});

title33.on( "click", function( event ) {
title11.removeClass("actived");
title22.removeClass("actived");
title33.addClass("actived");
});