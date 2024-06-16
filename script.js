function getValue(val) {
   var v = document.getElementById('result');
   v.value += val;
}
function Clear() {
   var inp = document.getElementById('result');
   inp.value = '';
}
function Result(){
	var exp1 = document.getElementById('result').value;
	var exp2 = eval(exp1);
	document.getElementById('result').value = exp2;
}

