const calulateTemp = () => {
    const numberDays = document.getElementById("cars").value;
    console.log(numberDays);
    const selectedCars = document.getElementById("typesOfCars");
    const carsValue = selectedCars.options[selectedCars.selectedIndex].value;
    console.log(carsValue);

    let result;
    if(carsValue == "Economy"){
        result = numberDays * 4000;
        document.getElementById('resultContainer').innerHTML = `${result} is your rental cost `;
    }
    else if(carsValue == "Midsize"){
        result = numberDays * 10000;
        document.getElementById('resultContainer').innerHTML = `${result}  is your rental cost`;
    }
    else if(carsValue == "Luxury"){
        result = numberDays * 20000;
        document.getElementById('resultContainer').innerHTML = `${result}  is your rental cost`;
    }
    
}