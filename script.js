$(document).ready(function(){

    $(".card").hide();
    $(".terminal")

    var scenario = 0;

    SceneZero();

    function SceneZero(){
        let intro = "Hello, I am A.V.A.";
        let intro2 = "I will be here to assist you today. </br>"; 

        $("#terminal-text").typed({
            strings: [intro, intro2],
            typeSpeed: 50,
            callback: function () {
                setTimeout(500);
                $(".typed-cursor").remove();
                $("p").removeClass("active");
                let newEle = "<p> A.V.A: $ </p> <span class='active'></span>";
                $(".terminal-content").append(newEle);
                scenario++;
                SceneOne();
            }
        });
    }

    function SceneOne(){
        let line1 = "I've done some digging...";
        let line2 = "Here is what I've found on my creator.";

        //let details = FormatJSON(_details);

        $(".active").typed({
            strings: [line1, line2],
            typeSpeed: 50,
            callback: function() {
                setTimeout(500);
                $("span").removeClass("active")
                $(".typed-cursor").remove();
                let newEle = "</br> <p> A.V.A: $ </p> <span class='active'></span>";
                $(".terminal-content").append(newEle)
                scenario++;
                ScenarioTwo();
            }
        });
    }

    function ScenarioTwo(){
        let line1 = "Let me make some room...";

        $(".active").typed({
            strings: [line1],
            typeSpeed: 50,
            callback: function() {
                setTimeout(500);
                $("span").removeClass("active");
                MakeRoom();
            }
        });
    }

    function MakeRoom(){
        $(".terminal").delay(100).animate({
            right: '300px'
        }, "slow", function() {
            $(".card").delay(250).fadeIn("slow");
        });
    }

});