function getvalue(){
    let fname = document.getElementById("fname");
    let fnamevalue = fname.value;

    let results = document.getElementById("result");
    results.innerHTML = fnamevalue;
    results.style.textTransform = "capitalize"
}

