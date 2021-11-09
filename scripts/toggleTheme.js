function toggleTheme(theme) {
	const htmlEl = document.getElementsByTagName('html')[0];
	htmlEl.setAttribute('data-theme',theme);
}