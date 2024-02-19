setInterval(()=>{
    document.querySelectorAll(".gizmo-shadow-stroke").forEach((i)=>{
        if(i.textContent.includes("ChatGPT")){
            i.innerHTML = `<img src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/410566437_1047399673264696_8103756764118983425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGxZeibdk78icEcBfXBQGWNti9ywnsQINe2L3LCexAg1x6-97ey4m3CE5l_2_dX9T_ObIByMDt7vOYUsgg_sYVO&_nc_ohc=aNX_Up9kHUoAX9JC_Mo&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAxHoOh1XqLmMpT6DKycyamC8or0E5hwP_jp-F_SSy__Q&oe=65D8116B" alt="#">`
        }
    })
    var a = document.querySelectorAll(".font-semibold")
    for(var i=0;i<a.length;i++){
        if(a[i].textContent.includes("ChatGPT")){
            a[i].textContent = "Minh Hương";
        }
    }
}, 200)

