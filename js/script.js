let flex = document.querySelector('.flex')
let bloc = document.querySelector('.bloc')
let bloc1 = document.querySelectorAll('.bloc')
let len = bloc1[bloc1.length - 1]
let gar = [
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 57%, rgba(0,212,255,1) 100%)', 
    'linear-gradient(90deg, rgba(7,233,246,1) 0%, rgba(101,247,2,1) 51%, rgba(0,212,255,1) 100%)',
    'linear-gradient(90deg, rgba(246,7,7,1) 0%, rgba(229,247,2,1) 51%, rgba(255,0,14,1) 100%)',
    'linear-gradient(90deg, rgba(229,247,2,1) 53%, rgba(68,0,255,1) 100%)',
]
let num = Math.random()*4
num = Math.floor(num)
let g = gar[num]
// console.log(g);

flex.style.display = 'flex'
flex.style.justifyContent = 'space-between'


len.style.background = g