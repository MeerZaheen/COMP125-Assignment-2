/* main JavaScript file */

/*
* FileName: App.js
*
* @author Meer Zaheen Nazmul
* @date june 2, 2016
*
* StudentID: 300522487
* website: http://comp125-assignment-1.azurewebsites.net
* @description: This file is the main javascript file for the website
*/


// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("paragraphOne")
    paragraphElements[1] = document.getElementById("paragraphTwo")
    paragraphElements[2] = document.getElementById("paragraphThree")
    paragraphElements[3] = document.getElementById("paragraphTwo.1")
    paragraphElements[4] = document.getElementById("paragraphTwo.2")
    paragraphElements[5] = document.getElementById("paragraphTwo.3")

    var paragraphs = [];

    // data for my pages

    // index intro paragraph
    paragraphs[0] = "I am Meer Zaheen, born on March 12, 1990. I have been living in Toronto, Canada for almost 18 years. I graduated from Seneca College as a Civil Engineer in 2013. Since then, I was employed at an engineering firm called CCI-Group. Formerly I was at a 9 month contract with EXP Inc. I was always passionate about evolving products and disruptive technologies and hence why I chose to continue my education at Centennial College as a Software Engineer. Outside of Engineering and technology, I like to play competitive video games, absorb different cultures and enjoy amazing food. I have always had a passion for sports and personal fitness – not only to lead a healthy lifestyle but to bring out my competitive spirit. I live to serve my talents as an engineer, artist and a fitness enthusiast. I create balance in work, play, and community. Also, I want to be the kind of person my cat already thinks I am."

    // project intro paragraph
    paragraphs[1] = "On this page, you will be able to see some of my previous and on-going projects!"

    // project 1 paragraph (PC)
    paragraphs[3] = "This was my first ever custom-built desktop PC. I started this project with extreme budget for about 300$ and my initial plan was to keep on upgrading and work on this project. I did a lot of research onto PC components in every aspect possible. I enjoyed working on this project as much as I enjoyed all my other activities. As of now, this custom PC can handle everything thrown at it and there will always be a new upgrade as more and more technology arises."

    // project 2 paragraph (Art)
    paragraphs[4] = "Drawing and sketching has always been a part of my hobbie every since I was very young. This hobbie has somewhat become similar to a project."

    // project 3 paragraph (Websites)
    paragraphs[5] = "These are some of the websites I created using Web Expression 4."

    // contact me paragraph
    paragraphs[2] = " I'm a Civil Engineer graduate from Seneca College, Newnham Campus."
        + " I worked professionally as a Civil Engineer for 2 years and realized that I would like to pursue a different career." + " I'm currently enrolled in Centennial College as a Software Engineer."
        + " I enjoy First Person Shooter video games." + " I'm also a PC hardware enthusiast, as I have build my own PC - more information would be found on My Projects page."

    // check to see if paragraph one exists
    var paragraphElementLength = paragraphElements.length;

    // if paragraph exists then populate each paragraph on the page

    for (var index = 0; index < paragraphElements.length; index++) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
})();