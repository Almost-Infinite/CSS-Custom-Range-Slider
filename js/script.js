let body = document.querySelector("body")
let range = document.querySelector(".range")
let rangeValue = document.querySelector("#rangeValue")

range.onmousemove = function(value) {
    rangeValue.innerHTML = this.value
    
    body.style.background = `${'rgb('+this.value/2+','+this.value/2+','+this.value/2+')'}`
    body.style.filter = `hue-rotate(${this.value+'deg'})`
}
range.onchange = function(value) {
    rangeValue.innerHTML = this.value
    
    body.style.background = `${'rgb('+this.value/2+','+this.value/2+','+this.value/2+')'}`
    body.style.filter = `hue-rotate(${this.value+'deg'})`
}

