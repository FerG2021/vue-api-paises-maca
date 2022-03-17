<template>
  <div class="home">
    <h1
    :style="{'color': color}">
      Contador: {{contador}}
    </h1>

    <button class="btn btn-danger" @click="decrementarContador">
      Decrementar
    </button>
    <button class="btn btn-success" @click="incrementarContador">
      Incrementar
    </button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        contador: 0
      }
    },
    methods: {
      incrementarContador(){
        this.contador = this.contador + 1
      }, 
      decrementarContador(){
        this.contador = this.contador - 1
      }
    },
    computed: {
      color(){
        if (this.contador < 0) {
          return 'red'
        } else {
          return 'green'
        }
      }
    },
  }
</script>
