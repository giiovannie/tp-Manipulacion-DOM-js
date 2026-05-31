const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg"
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg"
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg"
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg"
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg"
  }
];

const contenedor = document.querySelector("#cards-grid") // div -row
const input = document.getElementById("busqueda"); // input 
let busqueda = null;
const btnEnviar = document.getElementById("enviar")
let coincidencia = null;

const form = document.querySelector("#section-form");
const formPersonaje = document.querySelector("#form-personaje")
const btnCrear = document.querySelector("#btn-crear");
const btnCancelar = document.querySelector(".btn-cancel")
const inputName = document.querySelector("#name");
const inputUrl = document.querySelector("#img-url")
let bloque = null;
let datos = null;
const btnModal = document.querySelector("#Agregar")

// manejos de listado de personajes
function mostrarPersonajes(mlp) {
  contenedor.innerHTML = "";

  mlp.forEach(personaje => {
    contenedor.innerHTML += `
      <div class="col">
        <div class="card">
          <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
          <div class="card-body">
            <h5 class="card-title">${personaje.nombre}</h5>
            <a href="#" class="btn btn-primary bg-danger border-secondary">Eliminar card</a>
          </div>
        </div>
      </div>
    `;
  });
}
                      //personajes,personaje buscado
function buscarPersonajes(per,pb){
  coincidencia = per.filter( p => {
    return p.nombre.toLowerCase().replace(/\s/g, "") === pb
  })
  
  console.log(coincidencia);
}

function cargarPersonaje(p,n,u){
  datos = {
    id: p.length + 1,
    nombre: n,
    imagen: u
  }

  p.push(datos)
  console.log(p[5].nombre);
  return datos
}

window.addEventListener("load", ()=>{
  mostrarPersonajes(personajes)
})


btnEnviar.addEventListener("click", ()=>{
  busqueda = input.value.replace(/\s/g, "").toLowerCase();
  buscarPersonajes(personajes,busqueda)
  mostrarPersonajes(coincidencia)
})


btnModal.addEventListener("click", ()=>{
  form.classList.remove("d-none");
})

formPersonaje.addEventListener("submit", (e)=>{
  e.preventDefault()
  
  cargarPersonaje(personajes,inputName.value,inputUrl.value)
  
  form.classList.add("d-none")
  
  mostrarPersonajes(personajes)
  
})