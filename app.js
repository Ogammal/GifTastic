
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

for (var i = 0; i < buttons.length; i++) {
    var button = $('<button>');
    $('#buttons-display').append(button);
    button.text(buttons[i]);
    button.val(buttons[i]);
    button.addClass('btn');
}

$(document).on("click", ".btn", function() {
    var sport = $(this).val();
    console.log(sport);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=" + apiKey;

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(queryURL)
    });
});
