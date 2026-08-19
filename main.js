
function moveCourtney(){


    const container = document.getElementById("container");
    
    const containerStyle = getComputedStyle(container);

    const containerHeight = fixComputedStringStyle(containerStyle.height , false , false);
    const containerWidth = fixComputedStringStyle(containerStyle.width , false , false);

    const courtney = document.getElementById("courtney");

    document.addEventListener("DOMContentLoaded", () => {


        let moveTopReverse = false;
        let moveLeftReverse = false;


        setInterval(() => {

            // hight = 50 and width = 50;

            const courtneyComputed = getComputedStyle(courtney); // the returned value is a string;

            const newLeft = fixComputedStringStyle(courtneyComputed.left , true , moveLeftReverse);
            const newTop = fixComputedStringStyle(courtneyComputed.top , true , moveTopReverse);


            if(newTop >= containerHeight - 100){
                moveTopReverse = true;
                courtney.style.backgroundColor = randomColor();
            } else if (newTop <= 5) {
                moveTopReverse = false;
                courtney.style.backgroundColor = randomColor();
            }


            if(newLeft >= containerWidth - 100){
                moveLeftReverse = true;
                courtney.style.backgroundColor = randomColor();
            } else if (newLeft <= 5) {
                moveLeftReverse = false;
                courtney.style.backgroundColor = randomColor();
            }



            courtney.style.top = `${newTop}px`;
            courtney.style.left = `${newLeft}px`;


        }, 10);


       

    })
}


function randomColor(){
    const colors = ["darkgreen" , "navy" , "red" , "black" , "purple" , "brown" , "pink"];

    const color = colors[Math.floor(Math.random() * 4)]

    return "beige";
}

function fixComputedStringStyle(string , addNum = true , subtraction){

    const withoutPX = string.replaceAll("px" , "");

    const Num = Number(withoutPX);

    const newVal = addNum ? (subtraction ? Num - 5 : Num + 5) : Num;

    return newVal;
}

moveCourtney();