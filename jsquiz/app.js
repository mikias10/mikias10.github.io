$(document).ready(function() {


    var options = [

        ["Botswana", "Namibia", "Senegal"],
        ["Germany", "Brazil", "Spain"],
        ["Canada", "Finland", "France"],
        ["Kenya", "Ethiopia", "South Sudan"],
        ["Ghana", "Mali", "Senegal"]

    ];


    var que1 = {
        q: "images/botswana.jpg",
        correct: options[0][0],
        explanation: "The correct answer is 'Botswana'. With one of the highest concentrations of rock art in the world, Tsodilo has been called the 'Louvre of the Desert'. Over 4,500 paintings are preserved in an area of only 10 km2 of the Kalahari Desert. The archaeological record of the area gives a chronological account of human activities and environmental changes over at least 100,000 years. Local communities in this hostile environment respect Tsodilo as a place of worship frequented by ancestral spirits."
    };

    var que2 = {

        q: "images/brazil.jpg",
        correct: options[1][1],
        explanation: "The correct answer is 'Brazil'. Founded at the end of the 17th century, Ouro Preto (Black Gold) was the focal point of the gold rush and Brazil’s golden age in the 18th century. With the exhaustion of the gold mines in the 19th century, the city’s influence declined but many churches, bridges and fountains remain as a testimony to its past prosperity and the exceptional talent of the Baroque sculptor Aleijadinho."

    };

    var que3 = {

        q: "images/canada.jpg",
        correct: options[2][0],
        explanation: "The correct answer is 'Canada'. Québec was founded by the French explorer Champlain in the early 17th century. It is the only North American city to have preserved its ramparts, together with the numerous bastions, gates and defensive works which still surround Old Québec. The Upper Town, built on the cliff, has remained the religious and administrative centre, with its churches, convents and other monuments like the Dauphine Redoubt, the Citadel and Château Frontenac. Together with the Lower Town and its ancient districts, it forms an urban ensemble which is one of the best examples of a fortified colonial city."
    };

    var que4 = {

        q: "images/ethiopia.jpg",
        correct: options[3][1],
        explanation: "The correct answer is 'Ethiopia'.Konso Cultural Landscape is a 55km2 arid property of stone walled terraces and fortified settlements in the Konso highlands of Ethiopia. It constitutes a spectacular example of a living cultural tradition stretching back 21 generations (more than 400 years) adapted to its dry hostile environment. The landscape demonstrates the shared values, social cohesion and engineering knowledge of its communities. The site also features anthropomorphic wooden statues - grouped to represent respected members of their communities and particularly heroic events - which are an exceptional living testimony to funerary traditions that are on the verge of disappearing. Stone steles in the towns express a complex system of marking the passing of generations of leaders."
    };

    var que5 = {

        q: "images/ghana.jpg",
        correct: options[4][0],
        explanation: "The correct answer is Ghana. The remains of fortified trading-posts, erected between 1482 and 1786, can still be seen along the coast of Ghana between Keta and Beyin. They were links in the trade routes established by the Portuguese in many areas of the world during their era of great maritime exploration."
    };



    var questions = [que1, que2, que3, que4, que5];


    var currentQ = 0;
    var score = [];
    var attempts = [];




    function choices(currentQ) {

        for (var i = 0; i < options[currentQ].length; i++) {

            $("ul").append("<li>" + options[currentQ][i] + "</li>");
        }

    }


    choices(currentQ);


    function quest() {

        var currentQ = 0;

        $("#question").append('<img src = " ' + questions[currentQ].q + ' "/>');


    }

    quest(currentQ);

    function answer(currentQ) {

        $("ul li").on("click", function(event) {

            event.preventDefault();

            if ($(this).text() != questions[currentQ].correct) {

                $("#feedback").text("Incorrect answer; next question.").css("background-color", "#bc142b");
                $("#explanation").fadeIn().text(questions[currentQ].explanation);

                $("li").off();

            } else {

                $("#feedback").text("Correct Answer").css("background-color", "#14bc5a");
                $("#explanation").fadeIn().text(questions[currentQ].explanation);
                var my_score = score.push("correct");
                $("#score").text(my_score);
                currentQ += 1;

                //once the correct answer is selected disable the click events of all the list items for the particular question

                $("li").off();

            }

        });

    }

        answer(currentQ);

    function nextQ(currentQ) {

        if (currentQ == 5) {

                $("ul").empty();
                $("#mainQ").hide();
                $("#question").empty();
                $("#feedback").empty().css("background-color","#ccc");
                $("#explanation").empty();
                $("#question").text("End of questions");
                $("#feedback").text("Thanks for taking the quiz");
                $("#nextQ").hide();
                choices(currentQ);
                answer(currentQ);
            }

        else 

            {
                $("ul").empty();
                $("#question").empty();
                $("#feedback").empty().css("background-color","#ccc");;
                $("#explanation").empty();
                $("#question").append('<img src=" ' + questions[currentQ].q + ' ">');
                choices(currentQ);
                answer(currentQ);

        }

    };


    $("#nextQ").click(function(event) {

        event.preventDefault();
        currentQ = currentQ + 1;
        nextQ(currentQ);


    });


    $("#back").click(function(event) {

        event.preventDefault();
        currentQ = 0;
        score.length = 0;
        $("#score").text(0);
        nextQ(currentQ);
        $("#mainQ").show();
        $("#nextQ").show();


    })

});









