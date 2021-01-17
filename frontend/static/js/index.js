import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import MyProfile from "./views/MyProfile.js";
import MyPosts from "./views/MyPosts.js";
import MyOpinions from "./views/MyOpinions.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async() => {
    // /posts/:id
    const routes = [
        { path: "/", view: Dashboard},
        { path: "/posts", view: Posts},
        { path: "/settings", view: Settings},
        { path: "/myProfile", view: MyProfile},
        { path: "/myPosts", view: MyPosts},
        { path: "/myOpinions", view: MyOpinions},

    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
          route: route,
          isMatch: location.pathname === route.path  
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

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
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes)
            .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      }
      
    const view = new match.route.view();
    var innerHtml = await view.getHtml();
    setInnerHTML(document.querySelector("#app"), innerHtml);



    // document.querySelector("#app").innerHTML = await view.getHtml();

  //  console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[r]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});


localStorage.setItem(
    "user",
    `{
        "name": "ana",
        "id": "1",
        "profileImageUrl": "data:image/png;base64,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",
        "joinDate" : "14.02.2019",
        "firstName" : "Ana",
        "lastName" : "Kokh",
        "myPostsAmount" : 1,
        "myOpnionsAmount" : 2

    }`
)
