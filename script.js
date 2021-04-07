const toggleTheme = document.querySelector('input[type = "checkbox"]');


function changeTheme(event){
   if(event.target.checked){
       document.documentElement.setAttribute('data-theme', 'dark')
    }
     else{
     document.documentElement.setAttribute('data-theme', "light")
     }
}

toggleTheme.addEventListener('change', changeTheme)