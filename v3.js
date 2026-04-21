// Zadanie 1
const header = document.querySelector("#main-header")
header.textContent = "tekst"

// Zadanie 2
const li = document.querySelectorAll(nav > li)

// Zadanie 3
const button = document.querySelector(".delete-trigger")

// Zadanie 4
const section = document.querySelector("#content-area > section ")

// Zadanie 5
const lol = document.querySelector("[data-secret]")

// Zadanie 6
const link = document.querySelector("a[data-link='home']")
const href = link.getAttribute("href")

// Zadanie 7
const przycisk = document.querySelector("#trigger-btn")
przycisk.closest(".level-1").textContent = "BMW"

// Zadanie 8
const ok = document.querySelector("tbody > tr")

// Zadanie 9
const jk = document.querySelector("#main-image ~ figcaption")

// Zadanie 10
const checkbox = document.querySelectorAll("[name='tags']")

// Zadanie 11
const bobo = document.querySelector("#username").parentElement

// Zadanie 12
const rodzic = document.querySelector(".notification-wrapper")
const dzieci = rodzic.childNodes

// Zadanie 13
const h1 = document.querySelector("h1").textContent

// Zadanie 14
const element = document.querySelector("#notification-list").lastElementChild

// Zadanie 15
const dx = document.querySelectorAll(".nest, level-2")
console.log(dx.length)

// Zadanie 16
const li = document.createElement("li")
const lista = document.querySelector(".nav-list")
lista.appendChild(li)

// Zadanie 17
const przycisk = document.createElement("button")
przycisk.textContent = "Logowanie"
const guzik = document.querySelector("header")
guzik.appendChild(przycisk)

// Zadanie 18
const tabela = document.querySelector("table")
const tr = document.createElement("tr")
const td1 = document.createElement("td")
td1.textContent = "103"
const td2 = document.createElement("td")
td2.textContent = "Piotr"
const td3 = document.createElement("td")
td3.textContent = "Aktywny"
const td4 = document.createElement("td")
td4.innerHTML = '<button class="delete-row">Usuń</button>'
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tabela.appendChild(tr)

// Zadanie 19
const paragraf = document.createElement("p")
paragraf.textContent = "tekst"
const noc = document.querySelector("#forms-demo")
noc.prepend(paragraf)

// Zadanie 20
