const egg = document.querySelector(".egg-class");
const basket = document.querySelector(".basket-class");

egg.style.top = '10px'
let leftPosition = 10*Math.floor(1/Math.random());
egg.style.left = leftPosition+'px';

basket.style.top = '540px'
let leftPositionBasket = 10;
basket.style.left = leftPositionBasket+"px";


let topPosition = 10;
const timerID = setInterval(() => {
    if(parseInt(egg.style.top) >= window.innerHeight-90 ){
        clearInterval(timerID);
    }
    if (parseInt(egg.style.top) < window.innerHeight-90 ){
    topPosition += 10;
    egg.style.top = topPosition + "px";

    //console.log(egg.style.top, basket.style.top)
    //console.log(egg.style.left, basket.style.left)
    if(egg.style.top === basket.style.top
    &&
       parseInt(egg.style.left) === 
       parseInt(basket.style.left)){
        egg.hidden = true;
    }
    if(parseInt(egg.style.top) > 
       parseInt(basket.style.top)
    &&
       parseInt(egg.style.left) != 
       parseInt(basket.style.left)){
        egg.src = "broken.jpg";
    }
    }   
}, 100);

window.onkeydown = (e) => {
    switch (e.keyCode) {
        case 39 : // arrow right
            leftPositionBasket+=10;
            basket.style.left = leftPositionBasket + "px";
            
            console.log(egg.style.left, basket.style.left)
            break;
        case 37 : // arrow left
            leftPositionBasket-=10;
            basket.style.left = leftPositionBasket + "px";
            
            console.log(egg.style.left, basket.style.left)
            break;
        default:
            break;
    }

}