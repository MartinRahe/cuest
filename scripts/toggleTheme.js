const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
function toggleTheme(theme) {
	htmlEl.setAttribute('data-theme',theme);
}