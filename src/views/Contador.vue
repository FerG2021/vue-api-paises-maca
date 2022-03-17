<template>
    <h1>Contador: {{contador}}</h1>
    <Btn :textoBoton="'Disminuir'" @accion="disminuir"/>
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />    
</template>

<script>
    import {useContador} from '../hooks/useContador'
    import Btn from '../components/Btn.vue'

    export default {
        components:{
            Btn
        },
        setup(props) {
            return {...useContador()}
        }
    }
</script>