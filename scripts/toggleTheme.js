const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
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