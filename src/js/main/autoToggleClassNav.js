const autoToggleClassNav = () => {
	const pageLink = window.location.href;
	console.log(pageLink);
	if(pageLink.indexOf("index.html") === -1) {
		$(".my-navbar").addClass("nav-second-type");
	}
}

export default autoToggleClassNav