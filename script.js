$(document).ready(function(){


//========================== INTRO SCENE FUNCTIONS ==========================\\
    $(".card").hide();
    $(".full-file").hide();
    $(".passcode").hide();
    $("#unlock-site").hide();
    $("#welcome-en").hide();
    $("#welcome-fr").hide();
    $("#welcome-ma").hide();
    $(".welcome").hide();
    $(".main-container").hide();
    $(".nav-container").hide();
    $(".row").hide();

    var scenario = 0;
    var cont = false;
    var skip = false; 

    SceneZero();

    function SkipIntro(){
        skip = true;
        //$(".terminal").fadeOut(500);
        $(".terminal").hide();
        //$(".full-file").fadeOut(500);
        $(".full-file").hide();
        //$(".card").fadeOut(500);
        $(".card").hide();
        //$(".passcode").fadeOut(500);
        $(".passcode").hide();
        //$(".skip").fadeOut(500);
        $(".skip").hide();
        ShowWelcome();
    }
    

    $(".skip").click(function(){
        SkipIntro();
    });

    function SceneZero(){
        let intro = "Hello, I am A.V.A.";
        let intro2 = "I will be here to assist you today. </br>"; 

        if(!skip){
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
    }

    function SceneOne(){
        let line1 = "I've done some digging...";
        let line2 = "Here is what I've found on my creator.";
        
        if(!skip) {
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
    }

    function SceneTwo(){
        let line1 = "Let me make some room...";

        if(!skip){
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
    }

    function SceneTwoFiller(){
        setTimeout(function(){
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
        }, 1500);
    }

    function SceneThree(){
        let line1 = "Ok, I'll keep looking.";

        if(!skip) {
            $(".active").typed({
                strings: [line1],
                typeSpeed: 50, 
                callback: function() {
                    setTimeout(function(){
                        ReadyScene();
                        SceneThreeFiller();
                    }, 500);

                    setTimeout(function(){
                        SceneFour();
                    }, 6000);
                }
            });
        }
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

    function SceneFour(){
        let line1 = "Oh no...";
        let line2 = "It seems like we've run out of time!";

        if(!skip){
            $(".active").typed({
                strings: [line1, line2],
                typeSpeed: 50, 
                callback: function() {
                    setTimeout(function(){
                        ReadyScene();
                        SceneFive();
                    }, 500);
                }
            });
        }
    }

    function SceneFive(){
        let line1 = "I've given you access to the rest.";

        if(!skip){
            $(".active").typed({
                strings: [line1],
                typeSpeed: 50, 
                callback: function() {
                    setTimeout(function(){
                        $(".passcode").fadeIn("fast");
                        ReadyScene();
                        SceneSix();
                    }, 500);
                }
            });
        }
    }

    function SceneSix(){
        let line1 = "You must hur...";

        if(!skip){
            $(".active").typed({
                strings: [line1],
                typeSpeed: 50,
                callback: function (){
                    KillTerminal();
                    setTimeout(function(){
                        $(".terminal").fadeOut("slow");
                    }, 2500);

                    setTimeout(function(){
                        $("#unlock-site").fadeIn("slow");
                    }, 3000);
                }
            });
        }
    }

    function KillTerminal(){
        setTimeout(function(){
            $("span").removeClass("active");
            $(".typed-cursor").remove();
            let newEle = "</br> <p> SUCCESS: The process with PID 47120 has been terminated. </p>";
            $(".terminal-content").append(newEle);
        }, 50);
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
        $(".full-file").delay(750).fadeIn("slow");
    }

    
    function ReadyScene(){
        $("span").removeClass("active");
        $(".typed-cursor").remove();
        let newEle = "</br> <p> A.V.A: $ </p> <span class='active'></span>";
        $(".terminal-content").append(newEle);
    }

    $(".terminal").on("keypress", "input#continue-input", function(e){
        if(e.which == 13) {
            let value = $("#continue-input").val();
            if(value === 'y' && !skip){
                cont = true;
                $("#continue-input").attr("disabled", "true");
                ReadyScene();
                SceneThree();
            }
        }
    });

    $(".unlock").keypress(function(e){
        let val = $(".unlock").val();

        if(val === '98241' && !skip) {
            $("#unlock-site").fadeOut("slow");
            $(".passcode").fadeOut("slow");
            $(".full-file").fadeOut("slow");
            $(".skip").fadeOut("slow");

            setTimeout(function(){
                ShowWelcome();
            }, 500);
        }

    });

    function ShowWelcome(){
        $(".welcome").show();
        /*setTimeout(function(){
            $("#welcome-fr").fadeIn(1000);
        }, 500);
        setTimeout(function(){
            $("#welcome-fr").fadeOut(1000);
        }, 1500);
        setTimeout(function(){
            $("#welcome-ma").fadeIn(1000);
        }, 2500);
        setTimeout(function(){
            $("#welcome-ma").fadeOut(1000);
        }, 3500);
        setTimeout(function(){
            $("#welcome-en").fadeIn(1000);
        }, 4500);
        setTimeout(function(){
            $(".main-container").show();
            $('html, body').animate({
                scrollTop: $("#about-me").offset().top
            }, 1000);
        }, 5500);*/

        //only the welcome statement
        setTimeout(function(){
            $("#welcome-en").fadeIn(1000);
        }, 500);
        setTimeout(function(){
            $(".main-container").show();
            $('html, body').animate({
                scrollTop: $("#about-me").offset().top
            }, 1000);
        }, 1500);

        /*setTimeout(function(){
            $(".nav-container").fadeIn(250);
        }, 6250);*/

        setTimeout(function(){
            $(".nav-container").fadeIn(750);
        }, 2250);

        setTimeout(function(){
            $(".row").fadeIn(750);
        }, 2500);
    }

//========================== END INTRO SCENE FUNCTIONS ==========================\\


//========================== CONTENT FUNCTION ==========================\\

    

//========================== CONTENT FUNCTION ==========================\\


});