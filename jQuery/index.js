$("h1").addClass("big-title margin-50"); //Adds classes to the tag
$("button").text("<em>Hey</em>") //Selects all elements with the same selector {button}, Ingores HTML Tags.
$("a").attr("href", "http://bing.com/") //Selects anchor tag "a" and changes the href to "http://bing.com".
$("a").attr("href") //Checks attributes in href

$("h1").click(function () {
    $("h1").css("color", "purple")
}) //Changes color to purple when clicking the h1 tag

$("button").click(function () {
    $("h1").css("color", "green")
}) //Changes color to green when clicking any button

$("input").keydown(function (event) {
    console.log(event.key)
}) //Captures input keys typed and logs them in the console

$(document).keydown(function (event) {
    $("h1").text(event.key)
}) //changes h1 text to key pressed

$("h1").on("mouseover", function (event) {
    $("h1").css("color", "blue")
}) //If mouse is over h1 changes color to blue

$("h1").before("<button>New</button>") //Adds button before h1 tag
$("h1").after("<button>New</button>") //Adds button after h1 tag
$("h1").prepend("<button>New</button>") //Adds button at the beginning of the content of the h1 tag
$("h1").append("<button>New</button>") //Adds button at the end of the content of the h1 tag

$("button").remove() //Removes all button elements