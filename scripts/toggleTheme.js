function toggleTheme() {
	const htmlEl = document.getElementsByTagName('html')[0];
	htmlEl.setAttribute('data-theme','dark');
	alert("test");
}