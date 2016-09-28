var word = prompt("Enter any word");


alert("The word your chose is " + word);
alert("There are"+" "+(word.length)+" "+"characters in your word");
alert("The third character is"+" "+(word.charAt(2))+".");
alert("Lowercase:"+(word.toLowerCase()));
alert("Lowercase:"+(word.toUpperCase()));
alert("Example: I have wanted a"+" "+(word)+" "+"since I was a little boy.");
alert("Subword:"+" "+(word.substring(0,2)));