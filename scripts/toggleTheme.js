const htmlEl = document.getElementsByTagName('html')[0];
var currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}
if (currentTheme == 'dark') {
	document.getElementById("toggletheme").checked = true;
}
function toggleTheme(theme) {
	currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
	if (currentTheme == 'dark') {
		theme = 'light';
	}
	else {
		theme = 'dark';
	}
	htmlEl.setAttribute('data-theme',theme);
    localStorage.setItem('theme', theme);
}