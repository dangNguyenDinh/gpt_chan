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

    setInterval(() => {
        try {
           //message color
            var messages = document.querySelectorAll(".flex-col .gap-1");
            for(let i=0;i<messages.length;i++){
                messages[i].style.backgroundColor = "#FDFFF5";
                messages[i].style.borderRadius = "10px";
                messages[i].style.padding = "10px 15px";
                messages[i].style.boxShadow = "5px 5px 20px darkgray";
            }
            //background
            document.querySelectorAll(".h-full")[10].style.backgroundImage = "url('https://i.pinimg.com/originals/5d/7c/c4/5d7cc4c44e0f6fd0c1345bc357c3d14c.jpg')";
            document.querySelectorAll(".sticky")[1].style.backgroundImage = "url(https://i.pinimg.com/originals/5d/7c/c4/5d7cc4c44e0f6fd0c1345bc357c3d14c.jpg)";
            document.querySelectorAll(".h-full")[9].style.backgroundImage = "url('https://i.pinimg.com/originals/5d/7c/c4/5d7cc4c44e0f6fd0c1345bc357c3d14c.jpg')";

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
        } catch (error) {
            console.log("error 1");
        }
        
    }, 200);



