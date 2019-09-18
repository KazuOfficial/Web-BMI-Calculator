function calc()
{
	var height = document.getElementById('hgtb').value;
	var weight = document.getElementById('wgtb').value;
	var height2 = height * height
	var result = weight/height2;

	if(height == 0 || weight == 0)
	{
		document.getElementById("result").style.marginRight = ''
		document.getElementById("result").innerHTML = "Wrong value!"
	}
	else
	{
		document.getElementById("result").innerHTML = result;
	}


}