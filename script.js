$(document).ready(function(){

    $(".card").hide();
    $(".terminal")

    var scenario = 0;
    var cont = false;

    SceneZero();

    function SceneZero(){
        let intro = "Hello, I am A.V.A.";
        let intro2 = "I will be here to assist you today. </br>"; 

        $("#terminal-text").typed({
            strings: [intro, intro2],
            typeSpeed: 50,
            callback: function () {
                setTimeout(function(){
                    $(".typed-cursor").remove();
                    $("p").removeClass("active");
                    let newEle = "<p> A.V.A: $ </p> <span class='active'></span>";
                    $(".terminal-content").append(newEle);
                    scenario++;
                    SceneOne();
                }, 500);
            }
        });
    }

    function SceneOne(){
        let line1 = "I've done some digging...";
        let line2 = "Here is what I've found on my creator.";

        $(".active").typed({
            strings: [line1, line2],
            typeSpeed: 50,
            callback: function() {
                setTimeout(function(){
                    ReadyScene();
                    scenario++;
                    SceneTwo();
                }, 500);
            }
        });
    }

    function SceneTwo(){
        let line1 = "Let me make some room...";

        $(".active").typed({
            strings: [line1],
            typeSpeed: 50,
            callback: function() {
                setTimeout(function(){
                    $("span").removeClass("active");
                    MakeRoom();
                    ReadyScene();
                    SceneTwoFiller();
                }, 500);
            }
        });
    }

    function SceneTwoFiller(){
        let line1 = "Shall we continue? (y/n) ";
        
        $(".active").typed({
            strings: [line1],
            typeSpeed: 50,
            callback: function(){
                $(".typed-cursor").remove();
                let newEle = "<input type='text' id='continue-input'> </input>";
                $(".active").after(newEle);
            }
        });
    }

    function SceneThree(){
        let line1 = "Ok, I'll keep looking.";

        $(".active").typed({
            strings: [line1],
            typeSpeed: 50, 
            callback: function() {
                ReadyScene();
                SceneThreeFiller();
            }
        });
    }

    function SceneThreeFiller(){
        let line1 = "Let me just clean this up for you.";

        $(".active").typed({
            strings: [line1],
            typeSpeed: 50, 
            callback: function() {
                ReadyScene();
                CleanUpJSON();
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

    function CleanUpJSON(){

        $(".card").delay(250).fadeOut("slow");
        $(".terminal").delay(500).animate({
            left: '20px'
        }, "slow");

    }

    
    function ReadyScene(){
        $("span").removeClass("active")
        $(".typed-cursor").remove();
        let newEle = "</br> <p> A.V.A: $ </p> <span class='active'></span>";
        $(".terminal-content").append(newEle);
    }

    $(".terminal").on("keypress", "input#continue-input", function(e){
        if(e.which == 13) {
            let value = $("#continue-input").val();
            if(value === 'y'){
                cont = true;
                $("#continue-input").attr("disabled", "true");
                ReadyScene();
                SceneThree();
            }
        }
    });

});