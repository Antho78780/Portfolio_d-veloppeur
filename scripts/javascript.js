let insert_project = document.getElementById("insert_project")
let insert_language = document.getElementById("insert_language")

fetch("file.json")
    .then(res => res.json())
    .then(data => {
        for (let i=0; i < data["projects"].length;i++) {
            insert_project.innerHTML += `<div class="col-md-4 pb-4"><div class="card h-100"><img class="card-img-top img-thumbnail" src="${data["projects"][i]["image"]}" 
            alt="Card image cap"><div class="card-body d-flex flex-column justify-content-between"><p class="card-text">${data["projects"][i]["text"]}</p>
            <a href="${data["projects"][i]["link"]}" class="btn btn-primary"><i class="fa fa-brands fa-github me-2"></i>Github</a></div></div></div>`
        }
        for (let i=0; i < data["languages"].length;i++) {
            insert_language.innerHTML += `<div class="card" style="width: 13rem;"><img src="${data["languages"][i]["image"]}" class="card-img-top" alt="...">
            <h5 class="card-title text-center">${data["languages"][i]["text"]}</h5>
            </div>`
        }
    })

