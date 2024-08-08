

  document.addEventListener('DOMContentLoaded', () => {
    const navHover= document.querySelectorAll('.navbar li')
    navHover.forEach( item => {
     item.addEventListener("mouseover",()=>{
             item.style.fontSize="1.2rem"
         })
       item.addEventListener("mouseout",()=>{
            item.style.fontSize="1rem"
         })
     
    });

  })
