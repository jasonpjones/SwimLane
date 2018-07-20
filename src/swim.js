/**
 * Created by jjones on 7/20/2018.
 */


$(function() {
    $(".stage-lane-opp").draggable({
        appendTo: "body",
        cursor: "move",
        helper: 'clone',
        revert: "invalid"
    });

    $(".stage-lane-opp-block").droppable({
        tolerance: "intersect",
        accept: ".stage-lane-opp",
       /* activeClass: "ui-state-default",
        hoverClass: "ui-state-hover", */
        drop: function(event, ui) {
            $(this).append($(ui.draggable));
        }
    });

    /*
    $(".stage-lane-opp").on("click", function() {
        alert("click");
    });
    */
});
