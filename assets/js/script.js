var isDark = false;

function toggleDark(){
    if(isDark){
        document.body.style.color = "#212529";
        document.body.style.backgroundColor = "white";
        var nes_containers = document.getElementsByClassName("nes-container");
        for (var i = 0; i < nes_containers.length; i++) {
            nes_containers[i].classList.remove("is-dark");
         }

        var balloon = document.getElementsByClassName("nes-balloon");
        for (var i = 0; i < balloon.length; i++) {
            balloon[i].classList.remove("is-dark");
         }

        var button = document.getElementsByClassName("toggle-btn");
        for (var i = 0; i < button.length; i++) {
            button[i].classList.remove("is-error");
         }
        
        var navLinks = document.getElementsByClassName("nav-link");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("dark-link");
        }
        var activeLink = document.getElementsByClassName("dark-active");
        activeLink[0].classList.remove("dark-active");
        isDark = false;
    }else{
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#212529";
        var nes_containers = document.getElementsByClassName("nes-container");
        for (var i = 0; i < nes_containers.length; i++) {
            nes_containers[i].classList.add("is-dark");
        }

        var balloon = document.getElementsByClassName("nes-balloon");
        for (var i = 0; i < balloon.length; i++) {
            balloon[i].classList.add("is-dark");
         }

        var button = document.getElementsByClassName("toggle-btn");
        for (var i = 0; i < button.length; i++) {
            button[i].classList.add("is-error")
        }
        
        var navLinks = document.getElementsByClassName("nav-link");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add("dark-link");
        }
        var activeLink = document.getElementsByClassName("active");
        activeLink[0].classList.add("dark-active"); 
        isDark = true;
    }
}

$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr("data-filter");
    
        if(value === "all"){
            $(".filter").show("1000");
        }else{
            $(".filter").not("." + value).hide("3000");
            $(".filter").filter("." + value).show("3000");
        }
    });
});

