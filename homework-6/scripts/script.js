const url = window.location.search;

const searchParams = new URLSearchParams(url);

let elem;

elem = document.getElementById("first-name");
if (searchParams.has("firstName")) {
    elem.value = searchParams.get("firstName");
} else {
    elem.value = elem.placeholder;
}

elem = document.getElementById("last-name");
if (searchParams.has("lastName")) {
    elem.value = searchParams.get("lastName");
} else {
    elem.value = elem.placeholder;
}

elem = document.getElementById("email");
if (searchParams.has("email")) {
    elem.value = searchParams.get("email");
} else {
    elem.value = elem.placeholder;
}

if (searchParams.has("gender")) {
    if (searchParams.get("gender") === 'male') {
        elem = document.getElementById("gender-male");
        elem.checked = true;
    }
} else {

}