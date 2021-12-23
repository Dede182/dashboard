let progressbar = document.querySelectorAll(".circular-progress")

let cirvalue = document.querySelectorAll(".cirvalue")
console.log(progressbar);
let speed = 10;

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

}






