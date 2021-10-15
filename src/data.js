export function loadExperienceYears() {
    const years = (new Date()).getFullYear() - 2015;
    setData("experience-years", years);
}

export function loadAge() {
    const age = Math.floor(((new Date()) - (new Date('1996-10-24'))) / (365.25 * 24 * 3600 * 1000));
    setData("age", age);
}

export function loadStars() {
    const x = document.getElementsByClassName('stars');
    for (let i = 0; i < x.length; i++) {
        const count = x[i].dataset.value;
        for (let z = 0; z < count; z++) {
            x[i].innerHTML += '<i class="fas fa-star" aria-hidden="true"></i>';
        }

        for (let z = count; z < 5; z++) {
            x[i].innerHTML += '<i class="far fa-star" aria-hidden="true"></i>';
        }
    }
}

function setData(className, value) {
    const x = document.getElementsByClassName(className);

    for (let i = 0; i < x.length; i++) {
        x[i].innerText = value;
    }
}