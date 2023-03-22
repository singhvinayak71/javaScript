function chngeBgc() {
    const arr = ['red', 'green', 'yellow', 'black', 'yellowgreen','chocalate', 'darkmangenta', 'gray', 'chartreuse', 'violet', 'pink' , 'darkgreen'];

    const arrLength = arr.length;

    let randomIndex = Math.floor(Math.random() * (arrLength - 1));

    console.log(randomIndex)
    console.log(arr[randomIndex])
    document.body.style.backgroundColor = `${arr[randomIndex]}`
}
