//your JS code here. If required.
let button = document.getElementsByTagName("input")[0];
        button.addEventListener("click",selectAndRemove);
        function selectAndRemove(){
            let dropdown = document.getElementById("colorSelect");
            let selectedIndex = dropdown.selectedIndex;
            dropdown.options[selectedIndex].remove(); 
        }