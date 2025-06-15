function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablink;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("activeTab");
    }

    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    document.getElementById(tabName).classList.add("activeTab");
    evt.currentTarget.className += " active";
}

window.onload = function() {
    document.getElementById("defaultOpen").click();
};
