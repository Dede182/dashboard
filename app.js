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
// light.innerText = b;
// if(light.innerText = b){
//     light.addEventListener('click',()=>{
//       light.innerText = a;  
//     }
//     )
// }







