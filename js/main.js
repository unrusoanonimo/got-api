"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_DOMAIN = "https://thronesapi.com";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    setTab(0);
    let a = fetch(`${API_DOMAIN}/api/v2/Characters`).then(v => 5);
    console.log(a);
    const resp = yield fetch(`${API_DOMAIN}/api/v2/Characters`).then(v => v.json());
    document.querySelector("#char-list").innerHTML = resp.map(v => charToCard(v)).join('');
}));
function charToCard(c) {
    return `<div class="col-12 col-md-4 mb-3">
    <div class="card">
        <img src="${escapeHtml(c.imageUrl)}" class="card-img-top" alt="${c.image}">
        <div class="card-body">
            <h5 class="card-title">${escapeHtml(c.fullName)}</h5>
            <p class="card-text">Title: ${escapeHtml(c.title)}</p>
        </div>
    </div>
</div>`;
}
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function setTab(n) {
    const curent = document.querySelector(".tab.active");
    const tabs = document.querySelectorAll(".tab");
    curent === null || curent === void 0 ? void 0 : curent.classList.remove("active");
    tabs.item(n).classList.add("active");
}
