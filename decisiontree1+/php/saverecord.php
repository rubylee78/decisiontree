<?php
include("connect.php");
header("Connnect-type:text/html; charset=utf-8");
$slcbd=mysql_select_db($db_link,"decisiontree");
if(!$slcbd) die("資料庫選擇失敗");
$age=40;
$sex="MALE";
$region="TOWN";
$income=30085.1;	
$married="YES";
$children="YES";
$car="YES";
$mortgage="YES";
$predictedpep="NO";

$sql_query="INSERT INTO `record`(`age`, `sex`, `region`, `income`, `married`, `children`, `car`, `mortgage`, `predicted pep`) VALUES ('".$age."','".$sex."','".$region."','".$income."','".$married."','".$children."','".$car."','".$mortgage."','".$predictedpep."'')";


?>