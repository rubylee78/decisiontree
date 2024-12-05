<?php
include("connect.php");
header("Connect-type:text/html; charset=utf-8");
$slcdb=mysqli_select_db($db_link,"decisiontree");
if(!$slcdb) die("資料庫選擇失敗");
$age=$_POST["agetext"];
$sex=$_POST["sexselect"];
$region=$_POST["regionselect"];
$income=$_POST["incometext"];	
$married=$_POST["marriedselect"];
$children=$_POST["childrenselect"];
$car=$_POST["carselect"];
$mortgage=$_POST["mortgageselect"];
$predictedpep=$_POST["finalanswer"];

$sql_query="INSERT INTO `record`(`age`, `sex`, `region`, `income`, `married`, `children`, `car`, `mortgage`, `predicted pep`) VALUES ('".$age."','".$sex."','".$region."','".$income."','".$married."','".$children."','".$car."','".$mortgage."','".$predictedpep."'')";


$sql_lastone="SELECET'id' FROM 'record' order by 'id' dess LIMIT 0,1";
$lastonequery=mysqli_query($db_link,$sql_lastone);
$result=mysqli_query($db_link,$sql_query);
$row=mysqli_fetch_array($lastonequery,MYSQLI_ASSOC);

if($result){
	echo "1";
}
else {
	echo $sql_query;
}

?>