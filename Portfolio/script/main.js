let cards = [
    {
        image: "../img/icon_html5.png",
        text: "HTML"
    },
    {
        image: "../img/icon_css.png",
        text: "CSS"
    },
    {
        image: "../img/icon_javascript.png",
        text: "JavaScript"
    },
    {
        image: "../img/icon_python.png",
        text: "Python"
    },
    {
        image: "../img/icon_react.png",
        text: "React"
    },
    {
        image: "../img/icon_git.png",
        text: "Git"
    }
];

let sectionSkillsMain = document.getElementsByClassName("section-skills-main")[0];

cards.forEach(function(card) {
    // Create a DIV
    let divElement = document.createElement("div");
    divElement.classList.add("card");

    // Create element IMG
    let imgElement = document.createElement("img");
    imgElement.src = card.image

    // Create a Paragraph
    let pElement = document.createElement("p");
    pElement.textContent = card.text;

    sectionSkillsMain.appendChild(divElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(pElement);
});