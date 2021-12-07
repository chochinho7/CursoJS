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

