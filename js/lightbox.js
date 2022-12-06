const imagenes = document.querySelectorAll('.img__galeria')
const imageneslight = document.querySelector('.agregar__imagen')
const contenedorlight = document.querySelector('.imagen__light')
const x = document.querySelector('.close');
const hamburguer1 = document.querySelector('.hamburguesa')

imagenes.forEach(imagen => {
    imagen.addEventListener('click',() => {
        aparecerImagen(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen) =>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show');
    imageneslight.classList.toggle('show__image')
    hamburguer1.style.opacity = '0'

}

x.addEventListener('click', (e) =>{
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle('show');
        imageneslight.classList.toggle('show__image')
        hamburguer1.style.opacity = '1'
    }
})