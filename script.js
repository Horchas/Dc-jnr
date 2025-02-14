
const dropdownBtns=document.getElementsByClassName('toggle')
const dropdowns = document.getElementsByClassName('toggle-content')


// dropdownBtns[0].addEventListener('click', (e) => { 
//     // change dropdown button
//     if (dropdowns[0].classList.contains('hide')) {
//         dropdownBtns[0].setAttribute("src", "./images/icon-arrow-up.svg")
//     } else {
//         dropdownBtns[0].setAttribute("src", "./images/icon-arrow-down.svg")
//     }
//     // toggle display property  
//     dropdowns[0].classList.toggle('hide')
    
// });

for (let index = 0; index < dropdowns.length; index++) {
    const dropdownBtn = dropdownBtns[index]
    const dropdown = dropdowns[index];

    dropdownBtn.addEventListener('click', (e) => { 
        if(dropdown.classList.contains('hide')){
            dropdownBtn.setAttribute("src","./images/icon-arrow-up.svg")
        }else{
            dropdownBtn.setAttribute("src", "./images/icon-arrow-down.svg")
        }
        dropdown.classList.toggle('hide')
       
    })
    
}

const sidebarClose =document.getElementById('sidebar-close')
const sidebarOpen =document.getElementById('sidebar-open')
const sidebarContent = document.getElementById('sidebar-content')

 sidebarClose.addEventListener('click', (e) => {
    sidebarContent.classList.add('hide')
 })

 sidebarOpen.addEventListener('click', (e) => {
    sidebarContent.classList.remove('hide')
 })

// const btnArray = Array.from(dropdownBtns)
// btnArray.forEach( (dropdownBtn, index)=> {
//     dropdowns.forEach((dropdown, index)=> {
//      dropdownBtn.addEventListener('click', (e) => {
//   dropdown.classList.toggle('hide')
//      })
//     }
// )
// });

// const dropArray = Array.form()