let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let container = 
document.getElementsByClassName('container')[0]

function createNewDiv(){
    // ${this.style.backgroundColor}  if style given inline or by javascript 
    const bgColor = window.getComputedStyle(this).backgroundColor; // if style given by css
    let newDiv = document.createElement("div");
    newDiv.setAttribute('style'
                       ,`background-color: ${bgColor} ; width: 5rem; height:5rem;`)
    newDiv.addEventListener('click', createNewDiv)
    container.appendChild(newDiv);

    this.style.pointerEvents = 'none';
    this.style.opacity = '0.5';
}

div1.addEventListener('click', createNewDiv)
div2.addEventListener('click', createNewDiv)
div3.addEventListener('click', createNewDiv)

console.dir(div1.onclick)