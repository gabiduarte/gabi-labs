

function testing() {
	var split = document.getElementById("content").value.split(" ");
	var finalWord, i, x, charPos, list;
	var sentence = "";
	

	
	for (i=0; i < split.length; i++) {

		if (split[i].length > 2) { 
			var lastChar = split[i].length - 1; 
			var charAv = lastChar - 2; 
			var result = [];
			var scrambled = [];
			
			do {list = Math.round(Math.random() * charAv) + 1; 
				
				if(list < lastChar  && scrambled.indexOf(list) == -1) {scrambled.push(list);}				
				
			} while (scrambled.length <= charAv); 
			
			for (x = 0; x < scrambled.length; x++) { 
				charPos = scrambled[x];  
				result.push(split[i].charAt(charPos)); 
			}
			
			finalWord = split[i].charAt(0) + result.join("") + split[i].charAt(lastChar) + " ";

		} else { finalWord = split[i] + " "; }
		
		sentence += finalWord;
	}
	
	document.getElementById("result").innerHTML = sentence;
} 
