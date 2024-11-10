const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skill = document.getElementById('skills') as HTMLElement


// addeventlistener w8 karta hai button pe click krne k lie 

toggleButton.addEventListener('click', ()=>{
    if (skill.style.display === 'none'){
        skill.style.display ='block'
    } else{
        skill.style.display ='none'
    }
})
