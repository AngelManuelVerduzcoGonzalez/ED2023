class Producto {
    constructor(codigo, nombre, cantidad, precio) {
        this.codigo = codigo
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
    }

    info() {
        return (`${this.codigo}, ${this.nombre}, ${this.cantidad}, ${this.precio}`)
    }

    infoHTML() {
        return `<div class="detalle">
                    <h4>${this.nombre}</h4>
                    <p>Precio: ${this.precio}</p>
                    <p>Código: ${this.codigo}</p>
                </div>`
    }
}

class Inventario {
    constructor() {
        this.datos = []
    }

    agregar(producto) {
        this.datos.push(producto);
    }

    eliminar(codigo) {
        for(let k = 0; k < this.datos.length; k++) {  //CILO PARA RECORRER LOS DATOS DEL INVENTARIO
            if(codigo == this.datos[k].codigo) {    //CONDICIÓN PARA ENCONTRAR EL PRODUCTO A ELIMINAR
                for(let j = 0; j < (this.datos.length - k)-1; j++) {    //CICLO PARA REPETIR EL GIRO DEL VECTOR 
                    let aux = this.datos[this.datos.length-1]
                    for(let i = this.datos.length-1; i > 0 ; i--) {     //CICLO PARA GIRAR EL VECTOR
                        this.datos[i] = this.datos[i-1]
                    }
                    this.datos[0] = aux
                }
            } 
        }
        this.datos.pop()

        return this.datos
    }

    buscar(codigo) {
        for(let i = 0; i < this.datos.length; i++) {
            if(codigo == this.datos[i].codigo){
                return this.datos[i].infoHTML()
            }
        }
        return "No existe"
    }

    listar() {
        let lista = []
        for(let i = 0; i < this.datos.length; i++) {
            lista.push(this.datos[i].infoHTML())
        }

        return lista
    }

    listaInversa() {
        let listaInversa = []
        for(let i = 0; i < this.datos.length; i++) {
            listaInversa.push(this.datos[i].infoHTML())
        }
        for(let i = 0; i < listaInversa.length/2; i++) {
            let aux = listaInversa[i]
            listaInversa[i] = listaInversa[listaInversa.length-1-i]
            listaInversa[listaInversa.length-1-i] = aux
        }
        return listaInversa
    }

    modificar(codigo, newCod, newNom, newCant, newPre) {
        for(let i = 0; i < this.datos.length; i++) {
            if(codigo == this.datos[i].codigo) {
                this.datos[i].codigo = newCod
                this.datos[i].nombre = newNom
                this.datos[i].cantidad = newCant
                this.datos[i].precio = newPre

                return this.datos[i].infoHTML()
            }
        }
    }

    insertar(pos, producto) {
        if(pos - 1 > this.datos.length) {
            this.datos.push(producto)
        } else {
            for(let i = this.datos.length; i >= pos; i--) {
                this.datos[i] = this.datos[i-1]
            }
            this.datos[pos-1] = producto
        }
    }
}


let miInventario = new Inventario()
const div = document.getElementById("detalles");

//COMPORTAMIENTO BOTÓN AGREGAR
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    let cod = document.getElementById('codigo').value;
    let nom = document.getElementById('nombre').value;
    let cant = document.getElementById('cantidad').value;
    let price = document.getElementById('precio').value;

    let nuevo = new Producto(cod, nom, cant, price);
    miInventario.agregar(nuevo);
    
    let historial = div.innerHTML
    div.innerHTML = `<span class="mensaje">Se agrego un nuevo producto:</span> ${nuevo.infoHTML()}`
    div.innerHTML += historial
    
})

//COMPORTAMIENTO BOTÓN BUSCAR
const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener('click', () => {
    let buscar = document.getElementById("codigo").value;

    let historial = div.innerHTML;
    div.innerHTML = `<span class="mensaje">Se encontro el siguiente resultado con código ${buscar}: </span> ${miInventario.buscar(buscar)}`
    div.innerHTML += historial
})

//COMPORTAMIENTO BOTÓN ELIMINAR
const btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener('click', () => {
    let eliminar = document.getElementById("codigo").value;

    console.log(miInventario.eliminar(eliminar));

    let historial = div.innerHTML;
    div.innerHTML = `<span class="mensaje">Se eliminó el producto de código ${eliminar} </span>`
    div.innerHTML += historial
})

//COMPORTAMIENTO BOTÓN LISTAR
const btnListar = document.getElementById("btnListar");
btnListar.addEventListener('click', () => {
    
    let historial = div.innerHTML
    div.innerHTML = `<span class="mensaje">Lista de productos:</span> ${miInventario.listar()}`
    div.innerHTML += historial
})

//COMPORTAMIENTO BOTÓN LISTAR INVERSO
const btnListaInv = document.getElementById("btnListaInv")
btnListaInv.addEventListener("click", () => {
    let historial = div.innerHTML
    div.innerHTML = `<span class="mensaje">Lista inversa de productos</span>: ${miInventario.listaInversa()}`
    div.innerHTML += historial
})

//COMPORTAMIENTO BOTÓN MODIFICAR
const btnModificar = document.getElementById("btnModificar");
btnModificar.addEventListener("click", () => {
    
    const btnAdd = document.getElementById("btnAdd")
    const btnReset = document.getElementById("btnReset")
    const btnListar = document.getElementById("btnListar")
    const btnAceptar = document.getElementById("btnAceptar");
    const btnCancelar = document.getElementById("btnCancelar");
    const btnListaInv = document.getElementById("btnListaInv");
    const btnEliminar = document.getElementById("btnEliminar");
    const btnBuscar = document.getElementById("btnBuscar");
    let modificar = document.getElementById("modificar").value
    let codigo = document.getElementById("codigo")
    let nombre = document.getElementById("nombre")
    let cantidad = document.getElementById("cantidad")
    let precio = document.getElementById("precio")

    btnAceptar.style.display = "inline-block"
    btnCancelar.style.display = "inline-block"
    btnModificar.style.display = "none"
    btnAdd.style.display = "none"
    btnReset.style.display = "none"
    btnListar.style.display = "none"
    btnListaInv.style.display = "none"
    btnEliminar.style.display = "none"
    btnBuscar.style.display = "none"

    for(let i = 0; i < miInventario.datos.length; i++) {
        if(modificar == miInventario.datos[i].codigo) {
            codigo.value = miInventario.datos[i].codigo
            nombre.value = miInventario.datos[i].nombre
            cantidad.value = miInventario.datos[i].cantidad
            precio.value = miInventario.datos[i].precio
        }
    }

})

//COMPORTAMIENTO BOTON CONFIRMAR MODIFICACIÓN
const btnAceptar = document.getElementById("btnAceptar")
btnAceptar.addEventListener("click", () => {
    const btnAdd = document.getElementById("btnAdd")
    const btnReset = document.getElementById("btnReset")
    const btnListar = document.getElementById("btnListar")
    const btnCancelar = document.getElementById("btnCancelar")
    const btnModificar = document.getElementById("btnModificar")
    let modificar = document.getElementById("modificar").value
    let codigo = document.getElementById("codigo").value
    let nombre = document.getElementById("nombre").value
    let cantidad = document.getElementById("cantidad").value
    let precio = document.getElementById("precio").value

    let historial = div.innerHTML
    div.innerHTML = `<span class="mensaje">Se modifico un producto: </span> ${miInventario.modificar(modificar, codigo, nombre, cantidad, precio)}`
    div.innerHTML += historial


    btnAceptar.style.display = "none"
    btnCancelar.style.display = "none"
    btnModificar.style.display = "inline-block"
    btnAdd.style.display = "inline-block"
    btnReset.style.display = "inline-block"
    btnListar.style.display = "inline-block"
    btnListaInv.style.display = "inline-block"
    btnEliminar.style.display = "inline-block"
    btnBuscar.style.display = "inline-block"

})

//COMPORTAMIENTO BOTÓN CANCELAR MODIFICACIÓN
const btnCancelar = document.getElementById("btnCancelar")
btnCancelar.addEventListener("click", () => {
    const btnAdd = document.getElementById("btnAdd")
    const btnReset = document.getElementById("btnReset")
    const btnListar = document.getElementById("btnListar")
    const btnCancelar = document.getElementById("btnCancelar")
    const btnModificar = document.getElementById("btnModificar")
    let modificar = document.getElementById("modificar")
    let codigo = document.getElementById("codigo")
    let nombre = document.getElementById("nombre")
    let cantidad = document.getElementById("cantidad")
    let precio = document.getElementById("precio")

    modificar.value = ""
    codigo.value = ""
    nombre.value = ""
    cantidad.value = ""
    precio.value = ""

    btnAceptar.style.display = "none"
    btnCancelar.style.display = "none"
    btnModificar.style.display = "inline-block"
    btnAdd.style.display = "inline-block"
    btnReset.style.display = "inline-block"
    btnListar.style.display = "inline-block"
    btnListaInv.style.display = "inline-block"
    btnEliminar.style.display = "inline-block"
    btnBuscar.style.display = "inline-block"

})

const btnInsertar = document.getElementById("btnInsertar");
btnInsertar.addEventListener("click", () => {
    let cod = document.getElementById('codigo').value;
    let nom = document.getElementById('nombre').value;
    let cant = document.getElementById('cantidad').value;
    let price = document.getElementById('precio').value;
    let posicion = document.getElementById("insertar").value

    let nuevo = new Producto(cod, nom, cant, price);
    miInventario.insertar(posicion, nuevo)

    let historial = div.innerHTML;
    div.innerHTML = `<span class="mensaje">Se insertó un producto en la posición ${posicion}</span>`
    div.innerHTML += historial
})

