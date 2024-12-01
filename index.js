const pizzas = [
  {
    nombre: "Pizza Margarita",
    precio: 8.99,
    ingredientes: ["Tomate", "Mozzarella", "Albahaca"],
    valoracion: 4.5,
    img: "https://imag.bonviveur.com/pizza-margarita.jpg",
  },
  {
    nombre: "Pizza Pepperoni",
    precio: 10.99,
    ingredientes: ["Tomate", "Mozzarella", "Pepperoni"],
    valoracion: 4.7,
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/DAKghgqXYNurHY9B7-800-x.webp",
  },
  {
    nombre: "Pizza Hawaiana",
    precio: 9.49,
    ingredientes: ["Tomate", "Mozzarella", "Jamón", "Piña"],
    valoracion: 4.3,
    img: "https://assets.unileversolutions.com/recipes-v2/244028.jpg",
  },
  {
    nombre: "Pizza Vegetariana",
    precio: 9.79,
    ingredientes: ["Tomate", "Mozzarella", "Pimientos", "Cebolla", "Aceitunas"],
    valoracion: 4.6,
    img: "https://hoytoca-cms.ext-sites-prd.cloudherdez.com/assets/b0d29d09-852e-42e1-9e66-b486a01e25a3",
  },
  {
    nombre: "Pizza 4 Estaciones",
    precio: 11.49,
    ingredientes: [
      "Tomate",
      "Mozzarella",
      "Jamón",
      "Champiñones",
      "Olivas",
      "Pimientos",
    ],
    valoracion: 4.2,
    img: "https://i.blogs.es/2b355a/pizza-4-estaciones/1366_2000.jpg",
  },
  {
    nombre: "Pizza Carbonara",
    precio: 12.99,
    ingredientes: ["Crema", "Mozzarella", "Bacon", "Huevo"],
    valoracion: 4.8,
    img: "https://comedera.com/wp-content/uploads/sites/9/2022/04/pizza-carbonara.jpg",
  },
  {
    nombre: "Pizza BBQ",
    precio: 10.49,
    ingredientes: ["Salsa barbacoa", "Mozzarella", "Pollo", "Cebolla"],
    valoracion: 4.4,
    img: "https://okdiario.com/img/2015/09/08/receta-pizza-barbacoa.jpg",
  },
  {
    nombre: "Pizza Cuatro Quesos",
    precio: 11.99,
    ingredientes: ["Mozzarella", "Cheddar", "Gorgonzola", "Parmesano"],
    valoracion: 4.9,
    img: "https://www.hola.com/horizon/landscape/e8bb41b65869-pizzacuatroquesos-adob-t.jpg",
  },
  {
    nombre: "Pizza Mariscos",
    precio: 13.49,
    ingredientes: ["Tomate", "Mozzarella", "Camarones", "Mejillones", "Ajo"],
    valoracion: 4.1,
    img: "https://www.mmo.co.mz/wp-content/uploads/2024/09/Pizza-de-mariscos-Receitas.webp",
  },
  {
    nombre: "Pizza Tex-Mex",
    precio: 12.49,
    ingredientes: [
      "Salsa picante",
      "Mozzarella",
      "Carne molida",
      "Maíz",
      "Cebolla",
      "Pimientos",
    ],
    valoracion: 4.5,
    img: "https://asset-delivery.epicure.com/4f365e04-333c-00ab-a1e0-d5cc0e128aa9/dc11c90d-441e-4be0-bc10-bff0eda8bdda/Chicken-Barbacoa-Pizza_1036x583.jpg?format=webp",
  },
  {
    nombre: "Pizza Mediterránea",
    precio: 10.99,
    ingredientes: [
      "Tomate",
      "Mozzarella",
      "Aceitunas negras",
      "Albahaca",
      "Pimientos",
    ],
    valoracion: 4.7,
    img: "https://www.grandecheese.com/wp-content/uploads/2020/04/mediterranean-pizza.jpg",
  },
  {
    nombre: "Pizza Calzone",
    precio: 9.99,
    ingredientes: ["Mozzarella", "Ricotta", "Jamon", "Huevo"],
    valoracion: 4.2,
    img: "https://okdiario.com/img/recetas/2017/07/12/pizza-calzone-3.jpg",
  },
];

function calcularTotalOrdenPizza() {
  let precioTotal = document.getElementById("precioTotalOrdenPizzas")
  let totalOrden = pizzaCarrito.reduce((acumulador, pizza) => acumulador + pizza.precio, 0);
  totalOrden = Number(totalOrden.toFixed(2))
  precioTotal.innerHTML = `Total: ${totalOrden}`
}

let pizzaCarrito = []

function actualizarCarrito(nombre, precio, img) {
  pizzaCarrito.unshift({nombre, precio: parseFloat(precio), img})
  calcularTotalOrdenPizza()
  console.log(pizzaCarrito);
}

function cerrarCarrito() {
  let MainCarrito = document.getElementById("main-carrito-pizza")
  MainCarrito.style.display = "none"

  let body = document.body
  body.style.overflow = "auto"
}


function eliminarDelCarrito(nombre) {
  // Filtra el arreglo para eliminar la pizza con el nombre dado
  pizzaCarrito = pizzaCarrito.filter((index) => index.nombre !== nombre);
  contadorCarrito -= 1;
  let numeroSpan = document.getElementById("numeroDePizzas")
  numeroSpan.innerText = contadorCarrito


  // Seleccionamos el contenedor
  let carritoIcon = document.getElementById("btn-carrito");
  if (contadorCarrito < 1) {
     carritoIcon.style.display = "none"
  }

  cerrarCarrito()
}


function abrirCarrito() {
  let MainCarrito = document.getElementById("main-carrito-pizza");
  MainCarrito.style.display = "flex";

  let body = document.body;
  body.style.overflow = "hidden";

  // Usamos un objeto para contar las repeticiones de cada pizza
  const contadorPizzas = pizzaCarrito.reduce((contador, pizza) => {
    // Si la pizza ya está en el contador, incrementamos el contador
    if (contador[pizza.nombre]) {
      contador[pizza.nombre] += 1;
    } else {
      // Si es la primera vez que encontramos esta pizza, la agregamos al contador con valor 1
      contador[pizza.nombre] = 1;
    }
    return contador;
  }, {});
  console.log(contadorPizzas);
  

  // Mostrar las pizzas con el número de repeticiones
  let carritoVista = document.getElementById("carrito-pizzas");
  carritoVista.innerHTML = Object.keys(contadorPizzas).map((nombrePizza) => {
    // Filtramos las pizzas con el mismo nombre
    const pizzasFiltradas = pizzaCarrito.filter(pizza => pizza.nombre === nombrePizza);
    // Tomamos la primera pizza de las filtradas para mostrar su imagen y precio
    const pizza = pizzasFiltradas[0];

    return `
      <div class="vistaPizzaCarrito">
        <img src="${pizza.img}" alt="">
        <div class="infoVistaPizzaCarrito">
          <div>
            <h1>${pizza.nombre} x${contadorPizzas[nombrePizza]}</h1>
            <h3>${pizza.precio}</h3>
          </div>
          <div>
            <i class="fa-solid fa-trash" style="color: #f40b0b;" onclick="eliminarDelCarrito('${pizza.nombre}')"></i>
          </div>
        </div>
      </div>
    `;
  }).join("");
}


let contadorCarrito = 0
function agregarCarrito(nombre, precio, img) {

  if (contadorCarrito == 0) {
    console.log("No existe, lo creo");
    // Seleccionamos el contenedor
    let carritoIcon = document.getElementById("buttons-header");

     // Incrementamos el contador
     contadorCarrito += 1;

    // Agregamos primero el ícono del carrito, luego el botón de contacto
    carritoIcon.innerHTML += 
      `<a id="btn-carrito" class="btn-carrito" onclick="abrirCarrito()">
          <button><i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i><span id="numeroDePizzas">${contadorCarrito}</span></button>
       </a>
    `
    actualizarCarrito(nombre, precio, img);
  } else {
    console.log("Si existe, no lo creo, solo agrego");
    contadorCarrito += 1
    let numeroSpan = document.getElementById("numeroDePizzas")
    numeroSpan.innerText = contadorCarrito
    actualizarCarrito(nombre, precio, img);
  }
}








function cerrarModal() {
  let Mainmodal = document.getElementById("main-modal-pizza");
  Mainmodal.style.display = "none"
}

function abrirModal(img, nombre, precio, ingredientes, valoracion) {
  let Mainmodal = document.getElementById("main-modal-pizza");
  Mainmodal.style.display = "flex";
  Mainmodal.style.justifyContent = "center";
  Mainmodal.style.alignItems = "center";
  let modal = document.getElementById("modal-pizza");
  modal.innerHTML = `
    <img src="${img}" alt="">
      <div class="modal-info">
        <div class="modal-header" onclick="cerrarModal()">
          <i class="fa-solid fa-circle-xmark" style="color: #ed1e10;" ></i>
        </div>
        <div>
          <h1>${nombre}</h1>
          <h3>$${precio}</h3>
          <p>${ingredientes.join(", ")}</p>
          <p>Valoracion: ${valoracion}</p>
          <button onclick="agregarCarrito('${nombre}','${precio}', '${img}'), cerrarModal()">
            <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
            Comprar
          </button>
        </div>
      </div>
  `;
}

let menu = document.getElementById("menu-pizzas");
let pizzasHTML = pizzas
  .map((pizza) => {
    return `<div class="pizzas-list" onclick="abrirModal('${pizza.img}', '${pizza.nombre}', '${pizza.precio}', ['${pizza.ingredientes.join("','")}'],'${ pizza.valoracion}')">
      <img src="${pizza.img}">
      <div class="pizzas-info">
        <h1 class= "nombre-pizza"> ${pizza.nombre} </h1>
        <h3> $${pizza.precio} </h3>
        <p> ${pizza.ingredientes.join(", ")}</p>
        <p> Valoracion: ${pizza.valoracion} </p>
      </div>
    </div>`;
  })
  .join("");

menu.innerHTML = pizzasHTML;


// Reastrear Pedidos
const pedidos = [
  { numero: 12345, status: 'pendiente' },
  { numero: 123456, status: 'preparando' },
  { numero: 1234567, status: 'enviado' },
  { numero: 12345678, status: 'pendiente' },
  { numero: 123456789, status: 'entregado' }
];

function rastrearPedido() {
  const numeroPedido = document.getElementById('numeroPedido').value;
  const resultadoPedido = document.getElementById('resultadoPedido');
  
  const pedidoEncontrado = pedidos.find(p => p.numero == numeroPedido);

  if (pedidoEncontrado) {
      resultadoPedido.innerHTML = `
          <h3>Pedido ${pedidoEncontrado.numero}</h3>
          <div class="status-bar">
              <div class="status-step status-pendiente" style="opacity: ${pedidoEncontrado.status === 'pendiente' || ['preparando', 'enviado', 'entregado'].includes(pedidoEncontrado.status) ? '1' : '0.3'}">Pendiente</div>
              <div class="status-step status-preparando" style="opacity: ${pedidoEncontrado.status === 'preparando' || ['enviado', 'entregado'].includes(pedidoEncontrado.status) ? '1' : '0.3'}">Preparando</div>
              <div class="status-step status-enviado" style="opacity: ${pedidoEncontrado.status === 'enviado' || pedidoEncontrado.status === 'entregado' ? '1' : '0.3'}">Enviado</div>
              <div class="status-step status-entregado" style="opacity: ${pedidoEncontrado.status === 'entregado' ? '1' : '0.3'}">Entregado</div>
          </div>
      `;
  } else {
      resultadoPedido.innerHTML = '<p>Pedido no encontrado</p>';
  }
}

function cerrarModalRastrearPedido() {
  document.getElementById('modal-rastrear-pedido').style.display = 'none';
  document.getElementById('numeroPedido').value = ""
  document.getElementById('resultadoPedido').innerHTML = '';
}

function rastrearPedidoModal() {
  let modal = document.getElementById("modal-rastrear-pedido")
  modal.style.display = "flex"
}



// contacto

function ajustarAltura(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

function cerrarModalContacto() {
  document.getElementById('modal-contact').style.display = 'none';
  
  // Resetear formulario
  const formulario = document.querySelector('.contact-form');
  formulario.reset();
  
  // Resetear altura del textarea
  const textarea = document.getElementById('mensaje');
  textarea.style.height = '100px';
}

function abrirModalContacto() {
  document.getElementById('modal-contact').style.display = 'flex';
}