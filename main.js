document.getElementById("__next").style.fontFamily = "Tahoma";

//name  
console.log("start");
var canExec = 0;
//nút newchat
var a = document.querySelectorAll("div");
var allDiv = [];
a.forEach((i) => {
    if (i.textContent.includes("New chat")) {
        allDiv.push(i);
    }
});
allDiv[10].addEventListener('click', () => {
    console.log("new chat actived");
    canExec = 0;
    window.location.href = "https://chat.openai.com/";
});
//enter
var hasLetter = false;
document.querySelector("textarea").addEventListener('keydown', (e) => {
    console.log(canExec);

    if (e.key == "Enter") {
        console.log(canExec);
        if (canExec >= 2) {
            setInterval(() => {
                //background
                document.querySelectorAll(".h-full")[10].style.backgroundImage = "url('https://i.pinimg.com/originals/5d/7c/c4/5d7cc4c44e0f6fd0c1345bc357c3d14c.jpg')";
                document.querySelectorAll(".h-full")[11].style.backgroundSize = "cover";
                document.querySelectorAll(".sticky")[1].style.backgroundImage = "url(https://i.pinimg.com/originals/5d/7c/c4/5d7cc4c44e0f6fd0c1345bc357c3d14c.jpg)";

                //ảnh gpt
                var iconsm = document.querySelectorAll(".icon-sm");
                for (var i = 0; i < iconsm.length; i++) {
                    if(iconsm[i].parentNode.textContent.includes("ChatGPT")){
                        iconsm[i].parentNode.parentNode.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRyY6iVV7oCsNl-Jqz858LYty_oiafLQ9zAyjW1PIqQ&s" alt="#">`;
                    }
                }

                //ảnh người dùng
                var fontsemibold = document.querySelectorAll(".font-semibold");
                for(let i=0;i<fontsemibold.length;i++){
                    if(fontsemibold[i].textContent.includes("You")){
                        fontsemibold[i].parentNode.parentNode.querySelector("img").src = "https://pm1.aminoapps.com/6736/3fbaea905ca7aa1b28498ac082f440fe902af8a9v2_hq.jpg"
                    }
                }
                //tên gpt và người dùng
                var a1 = document.querySelectorAll(".font-semibold")
                for (var i = 0; i < a1.length; i++) {
                    if (a1[i].textContent.includes("ChatGPT")) {
                        a1[i].textContent = "Rin";
                    }
                    if (a1[i].textContent.includes("You")) {
                        a1[i].textContent = "Obito";
                    }
                }
            }, 200);
        }
        canExec++;
    }
    if (document.querySelector("textarea").value != '' && hasLetter == false) {
        canExec++;
        hasLetter = true;
    }
})



    // var background = document.createElement("div");
    // var img = document.createElement("img");
    // img.src = "https://i.pinimg.com/736x/66/f5/cf/66f5cf306d1690f29cc465d4e69ecc7f.jpg";
    // img.alt = "#";
    // img.style.width = "100vw";
    // background.appendChild(img);
    // background.style.opacity = '0.3';
    // background.style.position = 'fixed';
    // background.style.width = '100vw';
    // background.style.height = '100vh';
    // background.style.top = '0';
    // background.style.zIndex = '-1';
    // document.querySelector("body").appendChild(background);

// const e = new KeyboardEvent('keydown', {
//     bubbles: true,
//     cancelable: true,
//     key: 'Enter',
//   });
//   const a = new KeyboardEvent('keydown', {
//     bubbles: true,
//     cancelable: true,
//     key: 'a',
//   });
// setInterval(()=>{
//     document.querySelector("textarea").focus();
//     document.querySelector("textarea").dispatchEvent(a);
//     document.querySelector("textarea").dispatchEvent(e);
//     console.log("hehe")
// }, 1000)