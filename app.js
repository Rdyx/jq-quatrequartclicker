$(document).ready(function () {
	var theArray = ["Leo#404", "Ah t'es le cadet... T'es majeur ?", "Mais t'es sûr que t'as push ?"];
	var compteur = 0;
	$(".cake").click(function () {
		var randomize = theArray[Math.floor(theArray.length * Math.random())];
		$(".counter").html(++compteur);
		if (compteur % 3 === 0) {
			alert(randomize);
		};
	});
});