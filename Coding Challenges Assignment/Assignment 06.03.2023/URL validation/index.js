let url = "https://www.linkedin.com/in/vinayak-singh-91856824b/";

let reg = /(https:||http)?([a-zA-Z0-9]+[.])+[a-zA-Z]/

const result = reg.test(url);
console.log(result)
if (result == true) {
    console.log("Valid URL")
}
else {
    console.log("Invalid URL")
}
