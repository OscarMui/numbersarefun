console.log("js file get");
function getActive(){
    let html_navbars = [document.getElementById("html_navbar0"),
        document.getElementById("html_navbar1"),
        document.getElementById("html_navbar2"),
        document.getElementById("html_navbar3"),
        document.getElementById("html_navbar4"),
        document.getElementById("html_navbar5")
    ];
    html_navbars.forEach(function(item,index){
        console.log(item);
        console.log(item.href);
        console.log(window.location.pathname);
        if(item.href==window.location.pathname){
            item.classList.add("active");
        }
    });
}