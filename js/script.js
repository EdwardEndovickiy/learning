function sumTo(a){
	if(a!=1){
		return a + sumTo(a - 1)
	}else return a;
}

function sumToo(b) {
	var a = 0;
	while ( b >= 1 ){
		a += b;
		b--;
	}
	return a;
}

var a = 99;
document.writeln(sumTo(a));

var b = 99;
document.writeln(sumToo(b));

var c = 99;
var d = c * (c + 1) / 2;
document.writeln(d);