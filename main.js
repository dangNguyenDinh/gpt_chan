setInterval(()=>{
    document.querySelectorAll(".gizmo-shadow-stroke").forEach((i)=>{
        if(i.textContent.includes("ChatGPT")){
            i.innerHTML = `<img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.18169-9/536793_105670412903117_46630590_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeGjKJP1GMTNVzr1UKOwhwPsmOwehvekhIqY7B6G96SEih50mdG7S0wJn1ICgN8m54iItaJ3SHLzcxrTTbk0ioUp&_nc_ohc=nlVmlS-ljdYAX8J_H_O&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCwhg7bm-i-nsmVacWte4PCQILn6XP8qZ1WEHg15YvPWw&oe=65FAFCDC" alt="#">`
        }
    })
    var a = document.querySelectorAll(".font-semibold")
    for(var i=0;i<a.length;i++){
        if(a[i].textContent.includes("ChatGPT")){
            a[i].textContent = "Hinata chan";
        }
    }
}, 200)

