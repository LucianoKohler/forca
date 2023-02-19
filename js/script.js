var lives = 6;
var counter = document.getElementById('lives')
var svg = document.getElementById('svg')
var svgvalue = 0
var svgpath = 'img/forca-'+svgvalue+'.svg'

if (lives==0){
    counter.innerHTML='VOCÊ PERDEU!'
}
document.addEventListener('keydown', e =>{
    lives-=1
    svgvalue+=1
    svgpath = 'img/forca-'+svgvalue+'.svg'
    counter.innerHTML='VIDAS RESTANTES: ' + lives
    svg.src=svgpath
    console.log(svgpath)
})

