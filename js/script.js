var lives = 6;
var counter = document.getElementById('lives')
var svg = document.getElementById('svg')
var svgpath = 'img/forca-'+lives+'.svg'

if (lives==0){
    counter.innerHTML='VOCÊ PERDEU!'
}
document.addEventListener('keydown', e =>{
    lives-=1
    svgpath = 'img/forca-'+lives+'.svg'
    counter.innerHTML='VIDAS RESTANTES: ' + lives
    svg.src=svgpath
    console.log(svgpath)
})

