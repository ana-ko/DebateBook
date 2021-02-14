import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import MyProfile from "./views/MyProfile.js";
import MyPosts from "./views/MyPosts.js";
import MyOpinions from "./views/MyOpinions.js";
import Register from "./views/Register.js";
import Login from "./views/Login.js";

var navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

var updateNavButtons = () => {
  var user = localStorage.getItem("user");
  var loginButton = document.querySelector("#nav-login-button");
  var registerButton = document.querySelector("#nav-register-button");
  var logoutButton = document.querySelector("#nav-logout-button");

  var postsNav = document.querySelector("#posts-nav");
  var myProfielNav = document.querySelector("#my-profile-nav");
  var myPosts = document.querySelector("#my-posts-nav");
  var myOpinions = document.querySelector("#my-opinions-nav");
  var settings = document.querySelector("#settings-nav");
  
  
  
  
  if (user === null) {
    loginButton.style.display = "inline-block";
    registerButton.style.display = "inline-block";
    logoutButton.style.display = "none";
    myProfielNav.style.display = "none";
    myPosts.style.display = "none";
    myOpinions.style.display = "none";
    settings.style.display = "none";
  } else {
    loginButton.style.display = "none";
    registerButton.style.display = "none";
    logoutButton.style.display = "inline-block";
    myProfielNav.style.display = "block";
    myPosts.style.display = "block";
    myOpinions.style.display = "block";
    settings.style.display = "block";
  }

}

var router = async() => {
    // /posts/:id
    var routes = [
        { path: "/", view: Posts},
        { path: "/posts", view: Posts},
        { path: "/settings", view: Settings},
        { path: "/myProfile", view: MyProfile},
        { path: "/myPosts", view: MyPosts},
        { path: "/myOpinions", view: MyOpinions},
        { path: "/register", view: Register},
        { path: "/login", view: Login},
    ];

    // Test each route for potential match
    var potentialMatches = routes.map(route => {
        return {
          route: route,
          isMatch: location.pathname === route.path  
        };
    });

    var match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // Searched for this trick to run <script> tags after setting innerHtml directly
    var setInnerHTML = function(elm, html) {
        elm.innerHTML = html;
        Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
          var newScript = document.createElement("script");
          Array.from(oldScript.attributes)
            .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      }
      
    var view = new match.route.view();
    var innerHtml = await view.getHtml();
    setInnerHTML(document.querySelector("#app"), innerHtml);


    updateNavButtons();

    // document.querySelector("#app").innerHTML = await view.getHtml();

  //  console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e =>{
        // console.log("CHECKING THE CLICK", e.target);
        // console.log(e.target.href);
        // return e.preventDefault();
        if(e.target.href) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
