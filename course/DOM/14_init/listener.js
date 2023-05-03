const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const {target} = e;
//     target.classList.toggle("delete-modal__button");
//     console.log("Click")
// });

const form = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const {target} = e;

    target.style.backgroundColor = "red";
    target.style.backgroundColor === "red" ? target.style.backgroundColor = "" : target.style.backgroundColor = "red";
});