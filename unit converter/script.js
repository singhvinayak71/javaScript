const calulateTemp = () => {
    const numberTemp = document.getElementById('temp').value; // input value
    console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value; // get selected option value
    console.log(valueTemp);

    const celToFah = (celsius) => {
        let fahrenheight = Math.round((celsius * 9/5) + 32); 
        return fahrenheight;
    }
    const fehToCel = (fahrenheight) => {
        let  celsius= Math.round((fahrenheight - 32) * 5/9); 
        return celsius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Fahrenheight `;
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} Celsius`;
    }
}