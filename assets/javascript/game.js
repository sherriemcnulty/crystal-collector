// Rules - Each game starts with the following:
//   1) A sum of 0 that is displayed on the game board.
//   2) A target number that is a random number (range: 19 - 120) that is displayed on the game board.
//   3) and 4 crystals, each with a random number (range: 1 - 12) that are generated and hidden from the user.
// The only way the user knows a crystal is by clicking on it at which time its value is added to the sum.
// The goal is to reach the target without going over it.
// win = when the sum is equal to the target number
// lose = when the sum goes over the target
// The game resets after the user wins or loses a game.

$(document).ready(function () {

    "use strict";

    // global variables

    var game = {
        target: 0,
        sum: 0,

        initTargetSum: function () {
            // reset message
            $("#message").text("Enjoy!");

            // reset sum 
            this.sum = 0;
            console.log(`sum = ${this.sum}`);
            $("#sum").text(parseInt(this.sum));

            // setup random target
            var min = 19;
            var max = 120;
            this.target = Math.floor((Math.random() * (max - min) + 1) + min);
            $("#target").text(this.target);
        }, // init()

        initBalls: function () {
            var min = 1;
            var max = 12;

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
                        console.log("initVal: crystal2 = " + $("#crystal2").val());
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
                } // switch
            } // for i
        }, // initBalls()

        play: function (x) {

            var num = x;
            this.sum += num;

            if (this.sum > this.target) {

                $("#sum").text("Total: " + this.sum);
                $("#crystal1").prop('disabled', true);
                $("#crystal2").prop('disabled', true);
                $("#crystal3").prop('disabled', true);
                $("#crystal4").attr('disabled', true);
                $("#message").text("Oops! Try again.");

            } else if (this.sum === this.target) {

                $("#sum").text("Total: " + this.sum);
                $("#crystal1").prop('disabled', true);
                $("#crystal2").attr('disabled', true);
                $("#crystal3").attr('disabled', true);
                $("#crystal4").attr('disabled', true);
                $("#message").text("Yeah! You did it!")

            } else {

                $("#sum").text(this.sum);

            } // if-else game.sum
        } // play()
    } // game object

    //  MAIN PROGRAM

    $('#go-btn').click(function () {
        // Game starts on a click event
        game.initTargetSum();
        game.initBalls();

        // set up crystal ball click events
        $("#crystal1").click(function () {
            var num = parseInt($("#crystal1").val());
            game.play(num);
        });

        $("#crystal2").click(function () {
            var num = parseInt($("#crystal2").val());
            game.play(num);
        });

        $("#crystal3").click(function () {
            var num = parseInt($("#crystal3").val());
            game.play(num);
        });

        $("#crystal4").click(function () {
            var num = parseInt($("#crystal4").val());
            game.play(num);
        });
    });

}); // end document.ready()