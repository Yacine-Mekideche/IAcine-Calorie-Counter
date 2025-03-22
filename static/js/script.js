const upload_button = document.querySelector("#upload");
const calorie_count = document.querySelector("#calorie-count");
const display_image = document.querySelector("#display-image");

upload_button.addEventListener("click", () => {
    // Demander d'upload un fichier
    const file_input = document.createElement("input");
    file_input.type = "file";
    file_input.accept = "image/*";
    file_input.click();

    file_input.addEventListener("change", () => {
        loading();

        const file = file_input.files[0];

        // Afficher l'image uploadée
        const reader = new FileReader();
        reader.onload = (e) => {
            display_image.src = e.target.result;
        };
        reader.readAsDataURL(file);

        const fd = new FormData();
        fd.append("image", file);

        fetch("/upload", {
            method: "POST",
            body: fd
        }).then(response => response.json())
        .then(data => {
            stop_loading();
            calorie_count.textContent = `${data.calories.total} kcal 🔥`;
        });
    });
});

function loading() {
    document.querySelector("#upload").style.display = "none";
    document.querySelector("#calorie-count").style.display = "none";
    document.querySelector("#spinner").style.display = "block";
}

function stop_loading() {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector("#upload").style.display = "block";
    document.querySelector("#calorie-count").style.display = "block";
}
