var cart = []
function addToCart(obj){
    /*-Esta funcion va a servir para añadir articulos al carrito
    -"obj" va a ser el parametro que va a usar para agregar el objeto al carrito*/
    cart.push(obj)
}
function login(user, password){
    /*- la funcion sirve para poder loguearse con el usuario y contraseña predefinidos*/
    if (user == "augusto" && password == "petiruscomepizza"){
     return true   
    }
    return false
}
class Articulo{
    constructor (nombre, marca, precio, stock){
        
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    modStock(num){
        this.stock += num

    }
}
const producto1 = new Articulo ("Placa de video rtx 3060", "MSI", "135000",54);
