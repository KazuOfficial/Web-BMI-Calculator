function calc()
{
	var height = document.getElementById('hgtb').value;
	var weight = document.getElementById('wgtb').value;
	var result = weight/weight * weight;

	document.getElementById("result").innerHTML = result;

}