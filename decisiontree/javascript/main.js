window.onload=function(){
	document.getElementById("agetext").value="";
	document.getElementById("sexselect").value="";
	document.getElementById("regionselect").value="";
	document.getElementById("marriedselect").value="";
	document.getElementById("childrenselect").value="";
	document.getElementById("carselect").value="";
	document.getElementById("incometext").value="";
	document.getElementById("mortgageselect").value="";
	document.getElementById("finalanswer").innerHTML="";
}

function confirm(){

	if (document.getElementById("childrenselect").value="YES") {

		if (document.getElementById("incometext").value>30099.3) {

			document.getElementById("finalanswer").innerHTML="YES";

		}

	}

	document.getElementById("agetext").value="";
	document.getElementById("sexselect").value="";
	document.getElementById("regionselect").value="";
	document.getElementById("marriedselect").value="";
	document.getElementById("childrenselect").value="";
	document.getElementById("carselect").value="";
	document.getElementById("incometext").value="";
	document.getElementById("mortgageselect").value="";
	document.getElementById("finalanswer").innerHTML="";

}