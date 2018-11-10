
var apiKey = "bDMjhVa8QSB6aNYffT7AHjwJBaraHSKg"
var sport = "";
var buttons = [
    'boxing', 
    'football', 
    'formula one', 
    'golf', 'hockey', 
    'lacrosse', 
    'martial arts', 
    'mlb', 
    'mma', 
    'nba', 
    'nfl', 
    'skiing', 
    'volleyball', 
    'tennis', 
    'soccer', 
    'surfing'
];

function addButtons() {
    var button = $('<button>');
    $('#buttons-display').append(button);
    button.text(buttons[i]);
    button.val(buttons[i]);
    button.addClass('btn btn-outline-primary btn1');
}

for (var i = 0; i < buttons.length; i++) {
    addButtons();
}

$(document).on("click", ".btn1", function() {
    var sport = $(this).val();
    console.log(sport);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=" + apiKey;

    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        console.log(response)
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");          
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var sportImage = $("<img>");
            sportImage.attr({
                "src": results[i].images.fixed_height_still.url, 
                "data-still": results[i].images.fixed_height_still.url, 
                "data-animate": results[i].images.fixed_height.url,
                "data-state": "still"
            }); 
            sportImage.addClass("img");
            gifDiv.addClass("set");
            gifDiv.append(p);
            gifDiv.append(sportImage);
            $("#gifs").prepend(gifDiv);
        };
    });
});

$("#add-sport").on("click", function(event) {
    event.preventDefault();
    var addSport = $("#sport").val().trim();
    buttons.push(addSport);
    i = (buttons.length - 1);
    addButtons();
});

$(document).on("click", ".img", function() {
    console.log(this)
    var state = $(this).attr("data-state")
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
