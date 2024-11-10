var button = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// addeventlistener w8 karta hai button pe click krne k lie 
button.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
