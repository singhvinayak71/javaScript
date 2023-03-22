function highlightWords() {
    const txt = document.getElementById("texthighLight").innerText;
    let output = "";
    let words = txt.split(" ");
    let size = 8   
    let replacementword = ""; 
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= size) { 
            replacementword = "<span class='lightext'>" + word + "</span>";  
        } 
        else {
            replacementword = word;  //shorter than 8, don't need to change anything
        }
        output = output + " " + replacementword + " ";  //add the updated word to our output
    }

    return output; 
}

document.getElementById("texthighLight").innerHTML = highlightWords();  