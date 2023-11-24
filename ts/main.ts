const API_DOMAIN = "https://thronesapi.com";
document.addEventListener("DOMContentLoaded", async () => {
    let a = fetch(`${API_DOMAIN}/api/v2/Characters`).then(v => 5);
    console.log(a);

    const resp: Character[] = await fetch(`${API_DOMAIN}/api/v2/Characters`).then(v => v.json());


    document.querySelector("#char-list")!.innerHTML = resp.map(v => charToCard(v)).join('');

});
function charToCard(c: Character) {
    return `<div class="col-4 mb-3">
    <div class="card">
        <img src="${escapeHtml(c.imageUrl)}" class="card-img-top" alt="${c.image}">
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