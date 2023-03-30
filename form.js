
const clear = document.getElementById("cl");
clear.addEventListener("click", myfun);



function myfun() {
    document.getElementById('name1').value = '';
    document.getElementById('email1').value = '';
    document.getElementById('pwd1').value = '';
    document.getElementById('pwd2').value = '';

    document.getElementById('ne').innerText = '';
    document.getElementById('ns').innerText = '';

    document.getElementById('ee').innerText = '';
    document.getElementById('es').innerText = '';

    document.getElementById('pe').innerText = '';
    document.getElementById('ps').innerText = '';
    document.getElementById('pe1').innerText = '';
    document.getElementById('ps1').innerText = '';


}


// let name = document.getElementById('name1').value;
// let email = document.getElementById('email1').value;
// let pwd = document.getElementById('pwd1').value;
// let con=document.getElementById('container');

// con.addEventListener('submit', (e)=>{
//     e.preventDefault(); 
// })



function output() {
    let name = document.getElementById('name1').value;
    let email = document.getElementById('email1').value;
    let pwd = document.getElementById('pwd1').value;
    let pwd2 = document.getElementById('pwd2').value;

    let ne = document.getElementById('ne');
    let ns = document.getElementById('ns');

    let ee = document.getElementById('ee');
    let es = document.getElementById('es');

    let pe = document.getElementById('pe');
    let ps = document.getElementById('ps');

    let pe1 = document.getElementById('pe1');
    let ps1 = document.getElementById('ps1');





    if (name === null || name === '') {
        ne.innerText = "*user-name cannot be empty ";
    }
    else {
        ns.innerText = 'validated';
    }

    if (email === null || email === '') {
        ee.innerText = "*email cannot be empty ";
    }
    else {
        es.innerText = 'validated';
    }


    if (pwd === null || pwd === '') {
        pe.innerText = "*password cannot be empty ";
    }
    else {
        ps.innerText = 'validated';
    }

    
    if (pwd2 === null || pwd2 === '') {
       
        pe1.innerText = "*password cannot be empty ";
    }
    else if(pwd !== pwd2) {
        ps.innerText = '';
        pe1.innerText = "*password missmatch ";
            }
    else{
        ps1.innerText = 'validated';
    }


}
