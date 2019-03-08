// Rules - The game starts with the following:
//   1) A sum of 0 that is posted on the game board.
//   2) A target number of a random number (range: 19 - 120) that is generated and displayed on the game board.
//   3) and 4 crystals, each with a random number (range: 1 - 12) that are generated and hidden from the user.
// The only way the user knows a crystal is by clicking on it at which time its value is added to the sum.
// The goal is to reach the target without going over it.
// win = when the sum is equal to the target number
// lose = when the sum goes over the target
// The game resets after the user wins or loses a game.

$(document).ready(function () {

    "use strict";

    // global variables
    var TARGET;
    var SUM;

    // main function calls
    addClickEvents();
    startGame();

    function addClickEvents() {

        // click events for crystal balls
        $("#crystal1").click(function () {
            var addend = parseInt($("#crystal1").val());
            keepScore(addend);
        });

        $("#crystal2").click(function () {
            var addend = parseInt($("#crystal2").val());
            keepScore(addend);
        });

        $("#crystal3").click(function () {
            var addend = parseInt($("#crystal3").val());
            keepScore(addend);
        });

        $("#crystal4").click(function () {
            var addend = parseInt($("#crystal4").val());
            keepScore(addend);
        });

    } // end addClickEvents()


    function startGame() {

        // reset message
        $("#message").text("Channel your psychic powers . . . . .");

        // generate random target
        var min = 19;
        var max = 120;
        TARGET = Math.floor((Math.random() * (max - min) + 1) + min);
        $("#target").text("Target: " + TARGET);

        // reset sum 
        SUM = 0;
        $("#sum").text("Total: " + SUM);

        // generate random crystal values
        min = 1;
        max = 12;

        for (var i = 1; i < 5; i++) {

            var random = Math.floor((Math.random() * (max - min) + 1) + min);

            switch (i) {
                case 1:
                    $("#crystal1").attr("value", random);
                    $("#crystal1").prop('disabled', false);
                    console.log("initVal: crystal1 = " + $("#crystal1").val());

                    break;
                case 2:
                    $("#crystal2").attr("value", random);
                    $("#crystal2").prop('disabled', false);
                    console.log("initVal: crystal2 = " + $("#crystal").val());
                    break;
                case 3:
                    $("#crystal3").attr("value", random);
                    $("#crystal3").prop('disabled', false);
                    console.log("initVal: crystal3 = " + $("#crystal3").val());
                    break;
                case 4:
                    $("#crystal4").attr("value", random);
                    $("#crystal4").prop('disabled', false);
                    console.log("initVal: crystal4 = " + $("#crystal4").val());
                    break;

            } // end switch

        } // end for i

    } // startGame()

    function keepScore(addend) {

        SUM += addend;

        if (SUM > TARGET) {

            $("#sum").text("Total: " + SUM);
            $("#message").text("Oops! Try again.");
            $("#crystal1").prop('disabled', true);
            $("#crystal2").prop('disabled', true);
            $("#crystal3").prop('disabled', true);
            $("#crystal4").attr('disabled', true);

        } else if (SUM == TARGET) {

            $("#sum").text("Total: " + SUM);

            $("#message").text("Yeah! You're a winner!")
            $("#crystal1").prop('disabled', true);
            $("#crystal2").attr('disabled', true);
            $("#crystal3").attr('disabled', true);
            $("#crystal4").attr('disabled', true);

        } else {
            $("#sum").text("Total: " + SUM);
        }

    } // end keepScore()

}); // end document.ready()