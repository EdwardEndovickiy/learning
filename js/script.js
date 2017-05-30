function pow(b,x){
	var a = 1;
	do{
		a *= b;
		--x;
	} while ( x>0 )
	return a;
}

var a = 10;
var b = 5;
alert(pow(a,b));