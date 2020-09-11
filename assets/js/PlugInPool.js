var expanded = false;
function showCheckboxes(){
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    }else{
        checkboxes.style.display = "none";
        expanded = false;
    }
}



// Handling plug-ins & Description tables dynamically
//=============================================================================================

let Plugins = [
    
]


// Recently Used Plugins
//=============================================================================================
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("RUT_show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.RUT_dropbtn')) {
      var dropdowns = document.getElementsByClassName("RUT_dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('RUT_show')) {
          openDropdown.classList.remove('RUT_show');
        }
      }
    }
  }