
console.log("start");
var canExec = 0;
//nút newchat
var a = document.querySelectorAll("div");
var allDiv = [];
a.forEach((i)=>{
    if(i.textContent.includes("New chat")){
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
document.querySelector("textarea").addEventListener('keydown', (e)=>{
    console.log(canExec);

    if(e.key == "Enter"){
        console.log(canExec);
        if(canExec>=2){
            //hình ảnh gpt
            setInterval(()=>{
                document.querySelectorAll(".gizmo-shadow-stroke").forEach((i)=>{
                    if(i.textContent.includes("ChatGPT")){
                        i.innerHTML = `<img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-9/536793_105670412903117_46630590_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeGjKJP1GMTNVzr1UKOwhwPsmOwehvekhIqY7B6G96SEih50mdG7S0wJn1ICgN8m54iItaJ3SHLzcxrTTbk0ioUp&_nc_ohc=nlVmlS-ljdYAX8J_H_O&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCwhg7bm-i-nsmVacWte4PCQILn6XP8qZ1WEHg15YvPWw&oe=65FAFCDC" alt="#">`
                    }
                })
                //tên gpt
                var a1 = document.querySelectorAll(".font-semibold")
                for(var i=0;i<a1.length;i++){
                    if(a1[i].textContent.includes("ChatGPT")){
                        a1[i].textContent = "Hinata chan";
                    }
                }
            }, 200);
        }   
        canExec ++;
    }
    if(document.querySelector("textarea").value != '' && hasLetter == false){
        canExec ++;
        hasLetter = true;
    }
})

