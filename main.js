setInterval(()=>{
    document.querySelectorAll(".gizmo-shadow-stroke").forEach((i)=>{
        if(i.textContent.includes("ChatGPT")){
            i.innerHTML = `<img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/426570308_309246865491307_6628576440809608514_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=efb6e6&amp;_nc_eui2=AeH4YMBN95tOutGrjwMiNVpq0jOD3V0rZ6HSM4PdXStnofklWJSx6rpy1zA-Gu4AtPQT4C0bzbGHroP_70acGa3g&amp;_nc_ohc=Mj7IosiI1MsAX9QuxWh&amp;_nc_ht=scontent.fsgn2-6.fna&amp;oh=00_AfAdYbFAjfLmByPOWshJf9LNLk2D0P6uyDjnmLUwymkBFQ&amp;oe=65D8BB47" alt="#">`
        }
    })
    var a = document.querySelectorAll(".font-semibold")
    for(var i=0;i<a.length;i++){
        if(a[i].textContent.includes("ChatGPT")){
            a[i].textContent = "Luong Hong Ngoc";
        }
    }
}, 200)

