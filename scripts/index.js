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
const productos = [ new Articulo ("Placa de video rtx 3060", "MSI",'https://asset.msi.com/resize/image/global/product/product_1610444725b6aa81c4e74a8ea9fee28fdd225b58cc.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png', "135000",54), new Articulo ("Rtx 3060 TI", "MSI",'https://mexx-img-2019.s3.amazonaws.com/40461_1.jpeg', "185000",50), new Articulo ("Gabineta K20", "Sentey",'https://d2r9epyceweg5n.cloudfront.net/stores/001/381/842/products/k20_011-adeaaa2dbffd4de97f16100722228928-1024-1024.jpg', "25000",10)];

function crearArticulos(articulos){
    for (const articulo of articulos){
        let crearDiv = document.createElement("div");
        crearDiv.classList.add('item-container');        
        let image = document.createElement("img");
        image.src = articulo.img;
        crearDiv.appendChild(image);
        let anchor = document.createElement("a");
        anchor.innerText = articulo.nombre;
        crearDiv.appendChild(anchor);
        let botonCart = document.createElement("button");
        botonCart.onclick = function(){
            Cart.addToCart(articulo);
            refreshNumCart();
        }
        botonCart.innerText = 'Comprar';
        botonCart.id = 'boton-compra';
        crearDiv.appendChild(botonCart);
        let contenedor = document.querySelector('.articles-container');
        contenedor.appendChild(crearDiv);
    }
}
function refreshNumCart(){
    let numCart = document.querySelector('#num-carrito');
    numCart.innerText = Cart.content.length;
}
crearArticulos(productos)