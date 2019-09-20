function calc()
{
	var height = document.getElementById('hgtb').value;
	var weight = document.getElementById('wgtb').value;
	var height2 = height * height;
	var result = weight/height2;
	var stresult = result.toString();
	var subresult = stresult.substr(4, 4);
	var sliceresult = subresult.slice(0, 2) + "," + subresult.slice(2);

	if(height == 0 || weight == 0 || height > 300 || weight > 300)
	{
		document.getElementById("result").style.marginRight = '65px';
		document.getElementById("result").innerHTML = "Wrong value!";
	}
	else
	{
		document.getElementById("result").innerHTML = sliceresult;
	}

	if(result < 0.00185)
	{
		document.getElementById("bmi").innerHTML = "<br><font color='orange'>Underweight</font>";
	}
	else if(result > 0.00185 && result < 0.002499)
	{
		document.getElementById("bmi").innerHTML = "<br><font color='#54fa07'>Normal</font>";
	}
	else if(result > 0.0025 && result < 0.00299)
	{
		document.getElementById("bmi").innerHTML = "<br><font color='orange'>Overweight</font>";
	}
	else if(result > 0.0030)
	{
		document.getElementById("bmi").innerHTML = "<br><font color='red'>Obese</font>";
	}
}