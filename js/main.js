

// MENU RESPONSIVE

const btnMenu = document.getElementById('icon-menu')
const menuToggle = document.getElementById('menu')
const textHeader = document.querySelector('.header__text')

btnMenu.addEventListener('click', () =>{
   menuToggle.classList.toggle('icon-menu--mostrar')
   textHeader.classList.toggle('header__text--ocultar')
})


// Boton GO UP

const goUpButton = document.getElementById('go-up')


onscroll = () => {
   if(document.documentElement.scrollTop > 100) {
      goUpButton.classList.add('container-go-up__button--mostrar')
   } else {
      goUpButton.classList.remove('container-go-up__button--mostrar')
   }
}

goUpButton.addEventListener('click', ()=>{
   scrollTo({
      top: 0,
      behavior: 'smooth'
   })
})

// VENTANAS MODAL

const btnModal = document.querySelectorAll('.container-tratamientos__img')
const modalWindow = document.querySelectorAll('.modal')
const modalContainer = document.querySelectorAll('.modal-container')
const btnClose = document.querySelectorAll('.close')


btnModal.forEach((btn, indice) => {
   btn.addEventListener('click', () => {
      switch(indice) {
         case 0: 
            showModal(modalContainer[0], modalWindow[0], btnClose[0])
         break
         case 1: 
            showModal(modalContainer[1], modalWindow[1], btnClose[1])
         break
         case 2: 
            showModal(modalContainer[2], modalWindow[2], btnClose[2])
         break
         case 3: 
            showModal(modalContainer[3], modalWindow[3], btnClose[3])
         break
         case 4: 
            showModal(modalContainer[4], modalWindow[4], btnClose[4])
         break
         case 5: 
            showModal(modalContainer[5], modalWindow[5], btnClose[5])
         break
         case 6: 
            showModal(modalContainer[6], modalWindow[6], btnClose[6])
         break
         case 7: 
            showModal(modalContainer[7], modalWindow[7], btnClose[7])
         break
         case 8: 
            showModal(modalContainer[8], modalWindow[8], btnClose[8])
         break
         }
   })
})

const showModal = (container, modal, cerrar) =>{
   container.style.opacity = '1'
   container.style.visibility = 'visible'
   modal.classList.toggle('modal-close')

   cerrar.addEventListener('click', () => {
      modal.classList.toggle('modal-close')
      setTimeout(()=>{
         container.style.opacity = '0'
         container.style.visibility = 'hidden'
      }, 1000)
   })

   window.addEventListener('click', (e)=>{
      if(e.target == container){
         modal.classList.toggle('modal-close')
            setTimeout(()=>{
               container.style.opacity = '0'
               container.style.visibility = 'hidden'
            }, 1000)
      }
   })

}


// SELECCION CATEGORIAS PRODUCTOS


categorias.addEventListener('change', ()=>{

   const categorias = document.getElementById('categorias').value
   const facial = document.getElementById('categoria-facial')
   const corporal = document.getElementById('categoria-corporal')
   const aromaterapia = document.getElementById('categoria-aromaterapia')

      if(categorias == 'facial') {
         facial.classList.add('productos-galeria--activo')
      } else {
         facial.classList.remove('productos-galeria--activo')
      }
      if(categorias == 'corporal') {
         corporal.classList.add('productos-galeria--activo')
      } else {
         corporal.classList.remove('productos-galeria--activo')
      }
      if(categorias == 'aromaterapia') {
         aromaterapia.classList.add('productos-galeria--activo')
      } else {
         aromaterapia.classList.remove('productos-galeria--activo')
      }
   
})

// VALIDACIÓN FORMULARIO

const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')

const regExp = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
   apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

const campos = {
	nombre: false,
	apellido: false,
	email: false,
	telefono: false
}

const validarFormulario = (e) => {
   switch (e.target.name) {
         case "nombre":
           validarCampo(regExp.nombre, e.target, 'nombre')
         break
         case "apellido":
            validarCampo(regExp.apellido, e.target, 'apellido')
         break
         case "email":
            validarCampo(regExp.email, e.target, 'email')
         break
         case "telefono":
            validarCampo(regExp.telefono, e.target, 'telefono')
         break
   }
}

const validarCampo = (expresion, input, campo) => {
   if(expresion.test(input.value)){
      document.getElementById(`form__${campo}`).classList.remove('form__field--error')
      document.getElementById(`form__${campo}`).classList.add('form__field--correcto')
      document.querySelector(`#form__${campo} .form__field-mensaje`).classList.remove('form__field-mensaje-activo')
      campos[campo] = true
   } else {
      document.getElementById(`form__${campo}`).classList.add('form__field--error')
      document.getElementById(`form__${campo}`).classList.remove('form__field--correcto')
      document.querySelector(`#form__${campo} .form__field-mensaje`).classList.add('form__field-mensaje-activo')
      campos[campo] = false
   }
}

inputs.forEach((input) =>{
   input.addEventListener('keyup', validarFormulario)
   input.addEventListener('blur', validarFormulario)
})

form.addEventListener('submit', (e) =>{
   e.preventDefault()

   if(campos.nombre && campos.apellido && campos.email && campos.telefono){
      form.reset()

         document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo')
         setTimeout(()=>{
            document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo')
         }, 3000)

         document.querySelectorAll('.form__field--correcto').forEach((borderGreen)=>{
            borderGreen.classList.remove('form__field--correcto')
         })
   } else {
      document.getElementById('form__mensaje-error').classList.add('form__mensaje-error-activo')
      setTimeout(()=>{
         document.getElementById('form__mensaje-error').classList.remove('form__mensaje-error-activo')
      }, 3000)
   }

})