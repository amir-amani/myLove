
function moveHeart(){


    const container = document.getElementById("container");
    
    const containerStyle = getComputedStyle(container);

    const containerHeight = fixComputedStringStyle(containerStyle.height , false , false);
    const containerWidth = fixComputedStringStyle(containerStyle.width , false , false);

    const Heart = document.getElementById("heart");

    document.addEventListener("DOMContentLoaded", () => {


        let moveTopReverse = false;
        let moveLeftReverse = false;


        container.style.background = randomColor();

        document.addEventListener("click" , () => {
            moveTopReverse = !moveTopReverse;
            moveLeftReverse = !moveLeftReverse;

            Heart.classList.remove("spin");

            // Force the animation to restart
            void Heart.offsetWidth;

            Heart.classList.add("spin");
        })

        setInterval(() => {

            // hight = 50 and width = 50;

            const HeartComputed = getComputedStyle(Heart); // the returned value is a string;

            const newLeft = fixComputedStringStyle(HeartComputed.left , true , moveLeftReverse);
            const newTop = fixComputedStringStyle(HeartComputed.top , true , moveTopReverse);


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



            Heart.style.top = `${newTop}px`;
            Heart.style.left = `${newLeft}px`;


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

moveHeart();