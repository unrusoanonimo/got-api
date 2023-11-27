const API_ROOT = "https://thronesapi.com";
document.addEventListener("DOMContentLoaded", async () => {
    setTab("characters");

    let a = fetch(`${API_ROOT}/api/v2/Characters`).then(v => 5);
    console.log(a);

    const resp: Character[] = await fetch(`${API_ROOT}/api/v2/Characters`).then(v => v.json());


    document.querySelector("#char-list")!.innerHTML = resp.map(v => charToCard(v)).join('');


    const continents = document.querySelector("#continent-list")!;
    fetch(`${API_ROOT}/api/v2/Continents`).then(v => v.json() as Promise<Continent[]>).then(v => v.forEach(v => {
        const div = document.createElement("div");


        const continentName = document.createElement("p");
        // continent.classList.add("list-group-item");
        continentName.innerText = v.name;

        const img = document.createElement("img")
        div.style.backgroundImage = (`url('https://picsum.photos/1200/300?random=${v.id}')`);
        div.appendChild(img)
        div.appendChild(continentName)
        continents.appendChild(div)
    }))

});
function charToCard(c: Character) {
    return `<div class="col-12 col-md-4 mb-3">
    <div class="card">
        <div class="img-cut"><img src="${escapeHtml(c.imageUrl)}" class="card-img-top" alt="${c.image}"></div>
        <div class="card-body">
            <h5 class="card-title">${escapeHtml(c.fullName)}</h5>
            <p class="card-text">Title: ${escapeHtml(c.title)}</p>
        </div>
    </div>
</div>`
}


function escapeHtml(unsafe: string) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function setTab(id: string) {
    const curent = document.querySelector(".tab.active");
    const selected = document.querySelector(`#${id}.tab`);
    curent?.classList.remove("active")
    selected?.classList.add("active")
}
