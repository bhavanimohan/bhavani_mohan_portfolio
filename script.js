console.log("Portfolio Loaded");

const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "AI Enthusiast"
];

let index = 0;
let char = 0;
let current = "";
let isDeleting = false;

function type() {

    current = roles[index];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            current.substring(0, char++);

        if (char > current.length) {

            isDeleting = true;

            setTimeout(type, 1200);

            return;
        }

    } else {

        document.getElementById("typing").textContent =
            current.substring(0, char--);

        if (char < 0) {

            isDeleting = false;

            index++;

            if (index == roles.length)

                index = 0;
        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();






