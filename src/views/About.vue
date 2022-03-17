<template>
  <div class="about">
    <Titulo :contador="contador" :color="color"/>
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />    
    <!-- <h1
    :style="{'color': color}">Contador: {{contador}}</h1> -->
    <!-- <button @click="disminuir">-</button>
    <button @click="aumentar">+</button> -->

    <hr>

    <input type="text" v-model="texto">
    <p>{{texto}}</p>    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import Titulo from '../components/Titulo.vue'
import Btn from '../components/Btn.vue'

  export default {
    components:{
      Titulo, 
      Btn
    },
    setup() {
    // variables (data)
      const contador = ref(0) // para poder hacer que el valor sea reactivo se debe colocar ref, para luego colocar el valor, sea int, object, array, etc
      const texto = ref('')

    // funciones (computed y methods) 
      const aumentar = () =>{
        contador.value ++
      }

      const disminuir = () =>{
        contador.value --
      }

      const color = computed(() => {
        if (contador.value < 0) {
          return 'red'
        } else {
          return 'green'
        }
      })

      



    // para poder trabajar con setup debemos retornar un objeto, en este caso el contador
      return {contador, aumentar, disminuir, color, texto}
    }    
  }
</script>
