
// here are all the function 


function changeTab(tabName, title = "Welcome to our Website") {

    // This block of code hide all the div with name of single tab 
    let content = document.getElementsByClassName("single-tab");
    for (let a = 0; a < content.length; a++) {
        content[a].classList.add("d-none")
    }

    // This block of code show the particular view 
    let tabId = "tab_" + tabName;
    let tab = document.getElementById(tabId);
    tab.classList.remove("d-none");


    // change the title
    let htmlTitle = document.getElementById("tabs-title");
    htmlTitle.innerText = title;

}

function changeTabBtn(btn) {
    let tab_buttons = document.getElementsByClassName('tab-btn');
    for (let n = 0; n < tab_buttons.length; n++) {
        tab_buttons[n].style.backgroundColor = "#fff";
    }
    btn.style.backgroundColor = "#FFCD07";
}


// here started the code
document.addEventListener("DOMContentLoaded", function (event) {
    let tab_buttons = document.getElementsByClassName('tab-btn');
    for (let n = 0; n < tab_buttons.length; n++) {
        tab_buttons[n].addEventListener("click", () => {
            if (tab_buttons[n].getAttribute('for') == "visa") {
                changeTab("visa", `Best Visa Processing Agency in Bangladesh
            `);
                changeTabBtn(tab_buttons[n]);
            } if (tab_buttons[n].getAttribute("for") == "flight") {
                changeTab("flight", `Welcome to GTA! Find Flights, Hotels & Tour Packages
            `);
                changeTabBtn(tab_buttons[n]);
            } if (tab_buttons[n].getAttribute("for") == "hotel") {
                changeTab("hotel", `Find Best Rated Deals on GTA Hotels
            `);
                changeTabBtn(tab_buttons[n]);
            }
        })
    }


    // changing owl carousel previous and next icon 
    let owl_prev = document.getElementsByClassName("owl-prev");
    let owl_next = document.getElementsByClassName("owl-next");
});

