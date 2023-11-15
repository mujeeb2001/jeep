const sidebar = document.querySelector(".nav")
const bar = document.querySelector("#ham")

bar.addEventListener("click", allow)

function allow () {
    sidebar.classList.add("hide")
}

const withdraw = document.querySelector ("#cancel");

withdraw.addEventListener ("click", disap);

function disap () {
    sidebar.classList.add("disappear")
}