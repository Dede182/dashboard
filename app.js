let progressbar = document.querySelectorAll(".circular-progress")

let cirvalue = document.querySelectorAll(".cirvalue")
console.log(progressbar);
let speed = 10;
function p(){
    for(let i=0;i<cirvalue.length;i++){
    console.log(cirvalue[i].innerText)
    let progressendvalue = cirvalue[i].innerText; 
    let progressvalue = 0;  
    let progress = setInterval(()=>{
        progressvalue++;
        cirvalue[i].textContent = `${progressvalue}%`
        progressbar[i].style.background = `conic-gradient(#2853c2 ${progressvalue * 3.6}deg,
            #2c2d2e ${progressvalue * 3.6}deg)`
        stop();
        function stop(){
            if(progressvalue == progressendvalue){
            clearInterval(progress);
        }
        }
        
        }
    ,speed)
    
}}
p();
let light = document.getElementById("lightmode");
const dede = document.querySelectorAll(".sales");
const meme = document.querySelectorAll(".item-online");
console.log(dede)
let a = "light_mode";
let b = "dark_mode";
light.addEventListener('click',function rew(){
    document.querySelector('aside').classList.toggle('font-dark-theme');
    document.querySelector('main').classList.toggle('font-dark-theme');
    document.querySelector('.recent-order').classList.toggle('font-dark-theme');
    document.querySelector('.recent-table').classList.toggle('box-dark');
    document.querySelector('.update-box').classList.toggle('box-dark');
    document.querySelector('.container').classList.toggle('dark-theme-variables');
    document.querySelector(".switch").classList.toggle('lightwhite')
    document.querySelector('.calc-wrapper').classList.toggle('font-dark-theme');


    for(let i =0;i<dede.length;i++){
        dede[i].classList.toggle('box-dark')
    }
    for(let i =0;i<dede.length;i++){
        meme[i].classList.toggle('box-dark')
    }
    function one(){
       if(light.innerText = a){
           light.innerText = b;

        light.addEventListener('click',()=>{
            light.innerText = a;
            light.addEventListener('click',()=>{
                one();
            })
        })
        
       } 
    }
    one();
   
       
       
     }
    
)
let menu = document.querySelector('.menu');
let close = document.querySelector(".close");
document.getElementById('datePicker').valueAsDate = new Date();
if(screen.width < 1080){
    document.querySelector(".menu>span").style.display = "block";
    document.querySelector(".close").style.display = "block";
}
document.querySelector(".calculate").addEventListener('click',()=>{
    document.querySelector(".calc-wrapper").style.top = "30px";
})
document.querySelector(".closer").addEventListener('click',()=>{
    document.querySelector(".calc-wrapper").style.top = "-1000px";
})
menu.addEventListener("click",()=>{
    document.querySelector('aside').style.left = '0px'
})
close.addEventListener("click",()=>{
    document.querySelector('aside').style.left = '-300px'
})

