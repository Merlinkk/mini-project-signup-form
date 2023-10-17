var na = document.getElementById('name')
const btn = document.getElementById('btnnn')



btn.onclick = () =>{
    const nameValue = na.value;
    localStorage.setItem('name',nameValue)
}