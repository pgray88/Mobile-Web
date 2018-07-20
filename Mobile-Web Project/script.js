$(document).ready(function(){    
    $("iconBar").hover(function(){
        $(this).css("font-size", "76px");
    });
})

// function loadRepo(url, callback) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
          
//         if(this.readyState == 4 && this.status == 200) {
//             results = JSON.parse(this.responseText);
//             for(var i = 0; i < results.length; i++) {
//                 console.log(results[i].name);

//                 var ul = document.getElementById("repositories");
//                 var li = document.createElement ("li");
//                 var a = document.createElement ("a");

//                 li.appendChild(document.createTextNode (results[i].name));

//                 a.appendChild(li);
//                 a.setAttribute ("href" , results [i].html_url);
//                 ul.appendChild(a);
//             }
//         }
//     }
    
//     xhttp.open("GET", "https://api.github.com/users/pgray88/repos", true)
//     xhttp.send ();
//   }

  
// function loadRepocallback(xhttp) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
          
//         if(this.readyState == 4 && this.status == 200) {
//             results = JSON.parse(this.responseText);
//             for(var i = 0; i < results.length; i++) {
//                 console.log(results[i].name);

//                 var ul = document.getElementById("repositories");
//                 var li = document.createElement ("li");
//                 var a = document.createElement ("a");

//                 li.appendChild(document.createTextNode (results[i].name));

//                 a.appendChild(li);
//                 a.setAttribute ("href" , results [i].html_url);
//                 ul.appendChild(a);
//             }
//         }
//     }
    
//     xhttp.open("GET", "https://api.github.com/users/pgray88/repos", true)
//     xhttp.send ();
//   }



// $(document).ready(function(){
//     $("#styleTwo").click(function(){
//         $("p").toggleClass("main"); 
//         $(".jumbotron").toggleClass("jumbo2");
//         $(".container").toggleClass("container2");
//         $(".techSkills").toggleClass("techSkills2");
//         $(".gitWork").toggleClass("gitWork2");
//         $("#repositories").toggleClass("#repositories2");
//         $("h5").toggleClass("h52");
//         $(".iconBar").toggleClass("iconBar2");
//         $(".footer").toggleClass("footer2");
//         $(".iconBar a").toggleClass(".iconBar2 a2");
//     });
// });

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}