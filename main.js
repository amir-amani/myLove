
function moveCourtney(){


    const container = document.getElementById("container");
    
    const containerStyle = getComputedStyle(container);

    const containerHeight = fixComputedStringStyle(containerStyle.height , false , false);
    const containerWidth = fixComputedStringStyle(containerStyle.width , false , false);

    const courtney = document.getElementById("courtney");

    document.addEventListener("DOMContentLoaded", () => {


        let moveTopReverse = false;
        let moveLeftReverse = false;


        container.style.background = randomColor();


        setInterval(() => {

            // hight = 50 and width = 50;

            const courtneyComputed = getComputedStyle(courtney); // the returned value is a string;

            const newLeft = fixComputedStringStyle(courtneyComputed.left , true , moveLeftReverse);
            const newTop = fixComputedStringStyle(courtneyComputed.top , true , moveTopReverse);


            if(newTop >= containerHeight - 150){
                moveTopReverse = true;
                container.style.background = randomColor();
            } else if (newTop <= 5) {
                moveTopReverse = false;
                container.style.background = randomColor();
            }


            if(newLeft >= containerWidth - 200){
                moveLeftReverse = true;
                container.style.background = randomColor();
            } else if (newLeft <= 5) {
                moveLeftReverse = false;
                container.style.background = randomColor();
            }



            courtney.style.top = `${newTop}px`;
            courtney.style.left = `${newLeft}px`;


        }, 10);


       

    })
}


function randomColor(){
    const colors = [

        "linear-gradient(to right, darkgreen, lightgreen)",
        "linear-gradient(to right, navy, lightblue)",
        "linear-gradient(to right, purple, pink)",
        "linear-gradient(to right, brown, tan)",
        "linear-gradient(to right, pink, hotpink)"

    ];

    const color = colors[Math.floor(Math.random() * colors.length)]

    return color;
}

function fixComputedStringStyle(string , addNum = true , subtraction){

    const withoutPX = string.replaceAll("px" , "");

    const Num = Number(withoutPX);

    const newVal = addNum ? (subtraction ? Num - 5 : Num + 5) : Num;

    return newVal;
}

moveCourtney();