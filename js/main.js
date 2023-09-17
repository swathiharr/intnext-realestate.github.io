const ACTION_LOGIN = "_0x3e35e2";
const ACTION_CREATE = "_0x3e35e3";
const ACTION_CHECK = "_0x3e35e4";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
            if (reg.installing) {
                console.log("Service worker installing");
            } else if (reg.waiting) {
                console.log("Service worker installed");
            } else if (reg.active) {
                console.log("Service worker active");
            }
        })
        .catch((err) => {
            console.error("Service worker failed: ", err);
        });
}

var pp = getSession("dc");
try {
var bsAlert = new  bootstrap.Toast(document.getElementById("underconstruction"));

if (pp == "") {
    bsAlert.show();
document.getElementById("note").onclick = function() {
  bsAlert.hide();
  session("dc", "dc", 365);
}
}
} catch (err) {}

function session(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getSession(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*
            document.body.style.background = "url('../backgrounds/a" + (Math.floor(Math.random() * (12 - 1) ) + 1) + ".jpg') no-repeat fixed center";
            document.body.style.backgroundSize = "cover";
            document.body.style.transition = "all 1s ease";
*/

function err(err) {
    let bsAlert = new bootstrap.Toast(document.getElementById("error-toast"));
    bsAlert.show();
    document.getElementById("error").innerText = err;
}

document.addEventListener("DOMContentLoaded", function () {
    el_autohide = document.querySelector(".autohide");
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener("scroll", function () {
            let scroll_top = window.scrollY;
            if (scroll_top == 0) {
                el_autohide.classList.add("scrolled-up-tr");
            } else {
                el_autohide.classList.remove("scrolled-up-tr");
            }
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove("scrolled-down");
                el_autohide.classList.add("scrolled-up");
            } else {
                el_autohide.classList.remove("scrolled-up");
                el_autohide.classList.add("scrolled-down");
            }
            last_scroll_top = scroll_top;
        });
    }
});


if (typeof properdev !== "undefined") {
    properdev.onclick = function () {
        window.location.href = "/reg?utm_source=developer"
    };
}

if (typeof properbuy !== "undefined") {
    properbuy.onclick = function () {
        window.location.href = "/reg?utm_source=buyer"
    };
}

if (typeof gohome !== "undefined") {
    gohome.onclick = function () {
        window.location.href = "/?utm_source=404"
    };
}

if (typeof login !== "undefined") {
    login.onclick = async function () {
        if (email.value == "" || password.value == "" || email.value === undefined || password.value === undefined || email.value.trim().length == 0 || password.value.trim().length == 0) {
            err("Fill up all fields.");
        } else {
            await initLogin();
        }
    };
}

if (typeof create !== "undefined") {
   // alert("a");
}

//let server = "https://****************************/api/v1/query";
let server = "http://0.0.0.0:3000/api/v1/query";

let __aa = getSession("__aa");
let __ab = getSession("__ab");

checkLogin();

function checkLogin() {
if (__aa != "" && __ab != "") {
     
    // user is already logged in
    $.post(server, ' {  "_aa": \"' + ACTION_CHECK + '\",  "aa": "' + __aa + '",  "ab": "' + __ab + '"  }', function (data, status) {
        if (status == "success") {
            let accnt = JSON.parse(data);
            if (accnt.code == 200) {
                 
            } else {
                 
            }
        } else {
            err("Server is unavailable");
        }
    });
   }
}

document.onkeydown = (e) => {
    if (e.key == 123 || (e.ctrlKey && e.shiftKey && e.key == 'I') ||
    (e.ctrlKey && e.shiftKey && e.key == 'C') || 
    (e.ctrlKey && e.shiftKey && e.key == 'J') ||
    (e.ctrlKey && e.key == 'U') 
    ) {
        e.preventDefault();
    }
};

document.addEventListener('contextmenu', event=> event.preventDefault()); 

async function initCreate() {
    $.post(server, ' {  "_aa": \"' + ACTION_CREATE + '\", "name" : ' + name.value + ', "email": "' + email.value + '",  "password": "' + password.value + '"  }', function (data, status) {
        if (status == "success") {
            let code = JSON.parse(data).code;
            if (code == 200) {
                window.location.href = "/login";
            } else {
                err("Account is already exist!");
            }
        } else {
            err("Server is unavailable");
        }
    });
}

async function initLogin() {
    $.post(server, ' {  "_aa": \"' + ACTION_LOGIN + '\",  "email": "' + email.value + '",  "password": "' + password.value + '"  }', function (data, status) {
        if (status == "success") {
            let accnt = JSON.parse(data);
            if (accnt.code == 200) {
                // save session so user doesnt need to relogin
                let aa = accnt.aa;
                let ab = accnt.ab;

                // 30days
                session("__aa", aa, 30);
                session("__ab", ab, 30);
                window.location.href = './index.html';
                //url_redirect("https://exotic-homes.github.io/?utm_source=login");
            } else {
                err("Incorrect email or password!");
            }
        } else {
            err("Server is unavailable");
        }
    });
}