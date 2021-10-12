export function loadExperienceYears() {
    const years = (new Date()).getFullYear() - 2015;
    setData("experience-years", years);
}

export function loadAge() {
    const age = Math.floor(((new Date()) - (new Date('1996-10-24'))) / (365.25 * 24 * 3600 * 1000));
    setData("age", age);
}

function setData(className, value) {
    const x = document.getElementsByClassName(className);

    for (let i = 0; i < x.length; i++) {
        x[i].innerText = value;
    }
}