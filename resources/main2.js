const projectOne = document.getElementById('project1');
const projectTwo = document.getElementById('project2');
const projectThree = document.getElementById('project3');
const projectFour = document.getElementById('project4');
const projectFive = document.getElementById('project5');
const projectSix = document.getElementById('project6');
const holder = document.getElementById('holder');

const holderAppear = () => {
    holder.style.visibility = "visible";
}

const holderDisappear = () => {
    holder.style.visibility = "hidden";
}

projectOne.addEventListener("mouseenter", holderAppear);
projectOne.addEventListener("click", holderAppear);
projectOne.addEventListener("mouseleave", holderDisappear);

projectTwo.addEventListener("mouseenter", holderAppear);
projectTwo.addEventListener("mouseleave", holderDisappear);

projectThree.addEventListener("mouseenter", holderAppear);
projectThree.addEventListener("mouseleave", holderDisappear);

projectFour.addEventListener("mouseenter", holderAppear);
projectFour.addEventListener("mouseleave", holderDisappear);

projectFive.addEventListener("mouseenter", holderAppear);
projectFive.addEventListener("mouseleave", holderDisappear);

projectSix.addEventListener("mouseenter", holderAppear);
projectSix.addEventListener("mouseleave", holderDisappear);