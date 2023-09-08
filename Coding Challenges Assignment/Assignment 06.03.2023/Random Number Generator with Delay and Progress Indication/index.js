
let n = 3;
setInterval(()=>{
    n = n - 1;
    if(n == 0){
        n = 3;
    }
    console.log(`number will genrate after ${n}`)
}, 1000)

const randomNumGenrator = () =>{
    const randomNum = Math.floor(Math.random() * 100)
    console.log("The genrated number is............. "+ randomNum)      
}




setInterval(randomNumGenrator , 3000)