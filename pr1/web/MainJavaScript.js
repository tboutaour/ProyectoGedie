var aux = document.getElementById("ho2");

function getFrequency2(string, cutOff) {
    var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
        words = cleanString.split(' '),
        frequencies = {},
        word, frequency, i;

    for( i=0; i<words.length; i++ ) {
        word = words[i];
        frequencies[word] = frequencies[word] || 0;
        frequencies[word]++;
    }
    words = Object.keys( frequencies );
    aux.innerHTML = words.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0,cutOff).toString();
}


