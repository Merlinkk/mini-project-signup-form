window.addEventListener('load', function() {
    const savedValue = localStorage.getItem('name');
    console.log(savedValue)
    document.getElementById('name').textContent = savedValue
    const savedValue2 = this.localStorage.getItem('email')
    document.getElementById('name').textContent = savedValue
    document.getElementById('email').textContent = savedValue2
})

