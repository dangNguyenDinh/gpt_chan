
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
                // document.querySelectorAll(".gizmo-shadow-stroke").forEach((i)=>{
                //     if(i.textContent.includes("ChatGPT")){
                //         i.innerHTML = `<img src="https://i.pinimg.com/originals/b2/7a/cb/b27acbb6bbaad9788ebf9ae8c17ca357.jpg" alt="#">`
                //     }
                //     if(i.textContent.includes("You") || i.textContent.includes("You")){
                //         i.innerHTML = `<img src="https://pm1.aminoapps.com/6736/3fbaea905ca7aa1b28498ac082f440fe902af8a9v2_hq.jpg" alt="#">`
                //     }
                // })
                var a1 = document.querySelectorAll(".font-semibold");
                var a = document.querySelectorAll(".gap-3.text-base");
                for (var i = 0; i < a.length; i++) {
                    if(a[i].querySelector(".font-semibold").textContent.includes("ChatGPT")){
                        a[i].querySelector(".gizmo-shadow-stroke").innerHTML = `<img src="https://i.pinimg.com/originals/b2/7a/cb/b27acbb6bbaad9788ebf9ae8c17ca357.jpg" alt="#">`
                        a1[i].textContent = "Obito";
                }
                    if(a[i].querySelector(".font-semibold").textContent.includes("You")){
                        a[i].querySelector(".gizmo-shadow-stroke").innerHTML = `<img src="https://pm1.aminoapps.com/6736/3fbaea905ca7aa1b28498ac082f440fe902af8a9v2_hq.jpg" alt="#">`
                        a1[i].textContent = "Rin";
                    }
                }


                // var a = document.querySelectorAll(".gizmo-shadow-stroke")
                // for (var i = 0; i < a.length; i++) {
                //     if (a[i].textContent.includes("ChatGPT")) {
                //         a[i].innerHTML = `<img src="https://i.pinimg.com/originals/b2/7a/cb/b27acbb6bbaad9788ebf9ae8c17ca357.jpg" alt="#">`
                //     }
                //     if (a[i].textContent.includes("You")) {
                //         a[i].innerHTML = `<img src="https://pm1.aminoapps.com/6736/3fbaea905ca7aa1b28498ac082f440fe902af8a9v2_hq.jpg" alt="#">`
                //     }
                // }
                //tên gpt
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