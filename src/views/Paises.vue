<template>
    <h1 class="text-center">Lista de paises</h1>
    <p v-for="(pais, index) in arrayData" :key="index">
        {{pais.name.common}}
    </p>
</template>

<script>
import { ref } from '@vue/reactivity'
    export default {
        setup(props) {
            const arrayData = ref([])

            const fetchData = async() => {
                try {
                    const res = await fetch('https://restcountries.com/v3.1/all')
                    arrayData.value = await res.json()
                } catch (error) {
                    console.log(error)
                }
            }

            fetchData()

            return {arrayData}
        }
    }
</script>