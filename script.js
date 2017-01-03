$(document).ready(function(){

    var intro = "Hello, I am A.V.A.";
    var intro2 = "I will be here to assist you today. </br>"; 
    var scenario = 0;
    text = [intro, intro2];

    $("#terminal-text").typed({
        strings: [intro, intro2],
        typeSpeed: 0,
        callback: function () {
            $(".typed-cursor").remove();
            $("p").removeClass("active");
            let newEle = "<p> A.V.A: $ </p> <span class='active'></span>";
            $(".terminal-content").append(newEle);
            scenario++;
            SceneOne();
        }
    });

    function SceneOne(){
        let line1 = "I've done some digging...";
        let line2 = "Here is what I've found on my creator.";

        //let details = FormatJSON(_details);

        $(".active").typed({
            strings: [line1, line2],
            typeSpeed: 0,
            callback: function() {
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
            typeSpeed: 0,
            callback: function() {
                $("span").removeClass("active");
                MakeRoom();
            }
        });
    }

    function MakeRoom(){
        $(".terminal").delay(100).animate({
            right: '300px'
        }, "slow");
    }


    function FormatJSON(details) {
        let tab = "<span class='tab'> </span>"
        let bigtab = "<span class='bigtab'> </span>"
        let finalString = ""
        for(let i = 0; i < details.length; i++){

            if(i == 0){
                details[i] += "<br/>";
            } else if(details[i] === 'education": {' || details[i] === '"contact-info": {') {
                for(let j = 0; j < 3; j++){
                    details[i + j] += "<br/> &emsp; &emsp;";
                }
            } else  {
                details[i] += "<br/> &emsp;";
            }

            finalString += details[i];
        }

        return finalString;
    }

});



        /*let _details = ["{", 
        '"name": "Jonathan Fragakis",', 
        '"location": "Toronto, Ontario",',
        '"age": "20",',
        '"education": {',
        '"school": "University of Western Ontario",',
        '"major": "Software Engineering",',
        '"year": "Class of 2018",',
        '}',
        '"contact-info": {',
        '"email": "jonathan.fragakis@gmail.com",',
        '"linkedin": "https://www.linkedin.com/in/jfragg",',
        '"github": "https://github.com/jfragg"',
        '}',
        '}']*/