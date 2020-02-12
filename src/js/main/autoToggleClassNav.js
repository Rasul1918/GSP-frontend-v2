const autoToggleClassNav = () => {
	const pageLink = window.location.href;
	console.log(pageLink);
	if(pageLink.indexOf("index.html") !== -1) {
		$(".my-navbar").removeClass("nav-second-type");
	}
}

export default autoToggleClassNav