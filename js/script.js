const buttons = document.querySelectorAll('#kbd-btn')
const button = document.getElementById('kbd-btn')

button.addEventListener('click', function(){
    console.log(button.dataset.type)
})
