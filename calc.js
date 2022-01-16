class Calculator{
    constructor(dataPrevious,dataCurrent){
        this.dataPrevious = dataPrevious;
        this.dataCurrent = dataCurrent;
        this.clear();
    }
    clear(){
      this.dataCurrentop = " ";
      this.dataPreviousop = " ";
      this.operation = undefined;
    }
    delete(){
      this.dataCurrentop = this.dataCurrentop.toString().slice(0,-1);
    }
    appendNumber(number){
      if(number === "." && this.dataCurrentop.includes('.')) return
       this.dataCurrentop = this.dataCurrentop.toString() + number.toString();
    }

    choseOperation(operation){
      if(this.dataCurrentop === " ")return
      if(this.dataPreviousop !== " "){  
        this.compute();
      }
      this.operation = operation;
      this.dataPreviousop = this.dataCurrentop;
      this.dataCurrentop = ' ';
    }

    compute(){
      let computation;
      const curr = parseFloat(this.dataCurrentop);
      const prev = parseFloat(this.dataPreviousop);
      if(isNaN(prev) || isNaN(curr))
        return
        switch(this.operation){
        case '+' :
          computation = prev + curr;
          break;
        case '-':
          computation = prev - curr;
          break;
        case 'x':
          computation = prev * curr;
          break
        case '/':
          computation = prev / curr;
          break
        default:return
      }
      this.dataCurrentop = computation;
      this.operation = undefined;
      this.dataPreviousop = '';
    }

    getDisplayNumber(number) {
            const stringNumber = number.toString()
            const integerDigits = parseFloat(stringNumber.split('.')[0])
            const decimalDigits = stringNumber.split('.')[1]
            let integerDisplay
            if (isNaN(integerDigits)) {
              integerDisplay = ''
            } else {
              integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
            }
            if (decimalDigits != null) {
              return `${integerDisplay}.${decimalDigits}`
            } else {
              return integerDisplay
            }
          }

    updateDisplay() {
        this.dataCurrent.innerText =
          this.getDisplayNumber(this.dataCurrentop)
        if (this.operation != null) {
          this.dataPrevious.innerText =
            `${this.getDisplayNumber(this.dataPreviousop)} ${this.operation}`
        } else {
          this.dataPrevious.innerText = ''
        }
      }
    

    
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearAsButton = document.querySelector('[data-reset]')
const dataPrevious = document.querySelector('[dataPrevious]')
const dataCurrent = document.querySelector('[dataCurrent]')
const calcu = new Calculator(dataPrevious, dataCurrent)


numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
      calcu.appendNumber(button.innerText)
      calcu.updateDisplay();
     
    })
})
operationButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
    calcu.choseOperation(button.innerText);
    calcu.updateDisplay();
  })
})
equalsButton.addEventListener('click', button => {
  calcu.compute()
  calcu.updateDisplay()
})

clearAsButton.addEventListener('click', button => {
  calcu.clear()
  calcu.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calcu.delete()
  calcu.updateDisplay()
})

let onoff = document.getElementById("AA")
onoff.addEventListener('click',()=>{
  document.querySelector('.fas').classList.toggle('dark')
  document.querySelector('body').classList.toggle('light')

})