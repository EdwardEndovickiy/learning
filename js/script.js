		// var res = prompt("сколько тебе лет?", "");
		// (res < 14) ? alert("У тебя еще паспорта нет") : 
		// (res >= 18 && res < 21) ? alert("Уже совершеннолетний, я смотрю") :
		// (res >= 21) ? alert("Стареешь") : alert("Привет");

		var i = 0;
		var res = true;

		bre: while(i) {
			res = prompt("Введите число больше 100 ", "");
			if(res<100) break bre
			alert(res);
			i = false;
		}
		