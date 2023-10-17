window.addEventListener('load', function() {
    const savedValue = localStorage.getItem('name');
    console.log(savedValue)
    document.getElementById('first_name').value = savedValue
})



var userData={}

function storeInputData1(){
     userData = {

    lastName : document.getElementById('last_name').value,
    firstName : document.getElementById('first_name').value,
    // middleName : document.getElementById('middle_name').value,
    // gender : document.querySelector('input[name="gender"]:checked').value,
    date : document.getElementById('date').value,
    birthPlace : document.getElementById('birthplace').value
    }
}



function storeInputData2(){
    userData = {

//    country: document.getElementById('country').value,
//    currentCountry : document.getElementById('CurrentCountry').value,
//    education : document.querySelector('input[name="edu"]:checked').value

   }
}

function storeInputData3(){
    userData = {

   phone : document.getElementById('phoneno').value,
   email : document.getElementById('email').value,
   password: document.getElementById('pass').value
   }
}


const part1 = document.getElementById('part_1')
const part2 = document.getElementById('part_2')
const part3 = document.getElementById('part_3')

part2.style.display = 'none'
part3.style.display = 'none'

cover = document.getElementById('cover')
cover.style.display = "none"
const pagesub = document.getElementById('pagesub')
const lastsub = document.getElementById('lastsub')

lastsub.style.display = 'none'
var mode = 1;
console.log(mode)

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')

const btn = document.getElementById('btn')

lastsub.onclick = () =>{
    localStorage.setItem('email',userData['email']) 
}

pagesub.onclick = () => {
    mode++
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(mode)
    if (mode==2){
        storeInputData1();
        console.log(userData)
        part1.style.display = 'none'
        part2.style.display = ""
        b1.style.backgroundColor = "#02BE8B"
    }
    else if(mode==3){
        storeInputData2()
        console.log(userData)
        part2.style.display = 'none'
        part3.style.display = ""
        b2.style.backgroundColor = "#02BE8B"
        
    }
    else if(mode==4){
        storeInputData3()
        console.log(userData)
        part1.style.display = ""
        part2.style.display = ""
        previous.style.display = 'none'
        pagesub.style.display = 'none'
        lastsub.style.display = ""
        cover.style.display = ""
        b3.style.backgroundColor = "#02BE8B"
        btn.style.justifyContent = 'center'
    }

}

// pagesub.onclick = () => {
//     console.log(mode)
//     switch (mode) {
//         case 1:
//             userData = { ...userData, ...storeInputData1() };
//             console.log(userData);
//             part1.style.display = 'none'
//             part2.style.display = ''
//             mode++
//             break;
//         case 2:
//             userData = { ...userData, ...storeInputData2() };
//             console.log(userData);
//             break;
//         case 3:
//             userData = { ...userData, ...storeInputData3() };
//             console.log(userData);

//             // Perform any final actions or navigation here
//             // For example, saving the userData to localStorage
//             localStorage.setItem('userData', JSON.stringify(userData));

//             // After completing all steps, you can navigate to the next page
//             window.location.href = 'page2.html'; // Replace with the actual URL of the next page
//             break;
//     }

//     mode++; // Increment the mode for the next step
// };

const back = document.getElementById('previous')

back.onclick = () => {
    mode--
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(mode)
    if (mode==1){
        console.log(userData)
        part1.style.display = ''
        part2.style.display = "none"
        part3.style.display = 'none'
        b1.style.backgroundColor = '#fff'
        
    }
    else if(mode==2){
        storeInputData2()
        console.log(userData)
        part1.style.display = 'none'
        part2.style.display = ''
        part3.style.display = "none"
        b2.style.backgroundColor = "#fff"
    }
    else if(mode==3){
        storeInputData3()
        console.log(userData)
        b3.style.backgroundColor = "#fff"
    }
}

