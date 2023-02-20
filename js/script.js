var lives = 6;
var counter = document.getElementById('lives')
var svg = document.getElementById('svg')
var svgpath = 'img/forca-'+lives+'.svg'

var words=[
    'ábaco','alcorão',
    'queijo','formal',
    'toalha','musgo',
    'tártaro','carroceria',
    'pingando','corrida',
    'armado', 'pirralho',
    'homogênio', 'hipopótamo'
]
document.addEventListener('keydown', e =>{
    lives-=1
    svgpath = 'img/forca-'+lives+'.svg'
    counter.innerHTML='VIDAS RESTANTES: ' + lives
    svg.src=svgpath
})

var word = words[Math.floor(Math.random() * words.length)]

