$(document).ready(function () {
	$.backstretch('img/suurtaust.jpg');
});

function HideContent(d) {
    document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
    document.getElementById(d).style.display = "block";
}
function Display(d) {
    if (document.getElementById(d).style.display === "none") {
        document.getElementById(d).style.display = "block";
    } else { document.getElementById(d).style.display = "none"; }
}
