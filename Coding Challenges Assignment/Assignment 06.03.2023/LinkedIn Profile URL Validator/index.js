let url = "https://www.linkedin.com/in/vinayak-singh-91856824b/";
let reg = /(http(s)?)\:\/\/(www.)?(linkedin.com\/)?(pages\/)?/gm

const result = reg.test(url);
console.log(result)
if (result == true) {
    console.log("Valid Linkdin URL")
}
else {
    console.log("Invalid Linkdin URL")
}
