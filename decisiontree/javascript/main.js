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

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value>30099.3) {

			document.getElementById("finalanswer").innerHTML="YES";

		}

	}

$.ajax({
	type:"POST",
	url:"php/saverecord.php",
	data:{

		"agetext":document.getElementById("agetext").value,
		"sexselect":document.getElementById("sexselect").value,
		"regionselect":document.getElementById("regionselect").value,
		"marriedselect":document.getElementById("marriedselect").value,
		"childrenselect":document.getElementById("childrenselect").value,
		"carselect":document.getElementById("carselect").value,
		"incometext":document.getElementById("incometext").value,
		"mortgageselect":document.getElementById("mortgageselect").value,
		"finalanswer":document.getElementById("finalanswer").innerHTML,

	},

	success:function (data) {
		
		if(data!="1"){
			 
			 alert("有"+data+"筆資料記錄成功");
		}

	},

	error:function(){

		alert("發生錯誤 狀態:"+jqXHR.readyState+"    "+jqXHR.status);

	},

})

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