
console.log("form.js is loaded succesfully");

const locid = document.getElementById("loc");

const form =  document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const id = document.querySelector("#inputLocation").value;
    fetch("http://localhost:3000/weather?Search=" + id).then((response)=>{
    response.json().then((data)=>{
        console.log(data);
        locid.textContent= data.region;
    })
})


})