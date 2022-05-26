let filter_btns = document.querySelectorAll(".portfolio_filter")
let portfolio_imgs = document.querySelectorAll(".portfolio_img")

filter_btns.forEach(btn => {

    btn.addEventListener("click", e => {

        let filter = e.target.dataset.filter
        portfolio_imgs.forEach(img => {
            if (e.target.dataset.filter == "all") { img.style.display = "block" }
            else {
                if (img.classList.contains(filter)) { img.style.display = "block" }
                else { img.style.display = "none" }
            }
        })
    })
})
let sections= document.querySelectorAll("section")
let nav_items=document.querySelectorAll(".nav-item ")
window.addEventListener("scroll",e=>{
 let current=""
 sections.forEach(section=>{
     let sectionheightfromtop=section.offsetTop
     let sectionheight=section.clientHeight
     if(window.scrollY>(sectionheightfromtop-.3*(sectionheight)))
     {current=section.getAttribute("id")} 
     
 })
nav_items.forEach(item=>{
    
    item.classList.remove("active")
if(item.classList.contains(current)){item.classList.add("active")}


})
 

})