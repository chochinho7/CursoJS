const Productos= []
var Cart = {
    content: [], 
    owner: '',
    
    addToCart(obj){
        /*-Esta funcion va a servir para añadir articulos al carrito
        -"obj" va a ser el parametro que va a usar para agregar el objeto al carrito*/
        this.content.push(obj)

    },
    setOwner(owner){
        this.owner = owner;
    }
} 
function loginCheck(user, password){
    /*- la funcion sirve para poder loguearse con el usuario y contraseña predefinidos*/
    if (user == "augusto" && password == "petiruscomepizza"){
     return true 
    }
    return false
}
function login(res){
    if (loginCheck(res.user, res.password)){
        Cart.setOwner(res.user);
        console.log('usuario logueado ');
    }
    else{
        console.log('usuario incorrecto');
    }
}
class Articulo{
    constructor (nombre, marca, urlImg , precio, stock){
        
        this.id = Math.round(Math.random()*999999);
        this.nombre = nombre;
        this.marca = marca;
        this.img = urlImg;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    modStock(num){
        this.stock += num

    }
}
const URLGET = "scripts/database.json"

$.get(URLGET, generarArticulos);
/*<div class="item-container"><img src="link"><a>Nombre del articulo</a><button id="boton-compra">Comprar</button></div> */
function crearArticulos(articulos){
    for (const articulo of articulos){
        $(".articles-container").append(`<div class="item-container"><img src="${articulo.img}"><a>${articulo.nombre}</a><div class='btn-compra' id="boton-compra${articulo.id}">Comprar</div></div>`);
        $('.articles-container').on('click', `#boton-compra${articulo.id}`, function(){
            Cart.addToCart(articulo);
            refreshNumCart();
            console.log(articulo.id);
        })
        
    }
}
function refreshNumCart(){
    let numCart = document.querySelector('#num-carrito');
    numCart.innerText = Cart.content.length;
}


$('.table').hide();

$('.boton-carro').on('click', function(){
    let text = "";
    if($('.boton-carro').text() === 'Mostrar Carrito'){
        crearTabla(Cart.content);
        $('.table').show(1000);
        text = 'Ocultar Carrito';
    }else{
        $('.table').hide(500);
        text = 'Mostrar Carrito';
    }

    $('.boton-carro').html(text);
})

function crearTabla(carrito){
    $('.cuerpo-tabla').html('');
    for(const item of carrito){
        $('.cuerpo-tabla').append(`                <tr>
        <td><button class="btn-close"></button></td>
        <td>${item.marca} ${item.nombre}</td>
        <td><button class="btn btn-success btn-sm">+</button> 0 <button class="btn btn-primary btn-sm">-</button></td>
        <td>${item.precio}</td>
        <td>$0</td>
      </tr>`)

    }
    $('.cuerpo-tabla').append(`                <tr>
    <td>Precio Total:</td>
    <td>$0</td>
</tr>
`)
}

function generarArticulos(productos, estado){
    if(estado === "success"){for (const producto of productos){
       
        const articuloNuevo =  new Articulo (producto.nombre, producto.marca, producto.urlImg, producto.precio, producto.stock);

        Productos.push(articuloNuevo); 
        
    }
    crearArticulos(Productos)
}
}

