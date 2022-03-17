<template>
    <!-- <button @click="$emit('accion')">{{textoBoton}}</button> -->
    <button @click="accionAumentarHijo">{{textoBoton}}</button>
</template> 

<script>
    export default {
        props:['textoBoton'],
        setup(props, context) {
            const accionAumentarHijo = () =>{
                context.emit('accion')
            }

            return {accionAumentarHijo}
        }    
    }
</script>