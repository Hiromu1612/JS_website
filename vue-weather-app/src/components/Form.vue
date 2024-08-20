<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="city" placeholder="都市名を英語で入力"> <!-- v-modelは双方向データバインディングを行うディレクティブ vとはvueの略<-->
        <button type="submit">Get Weather</button>
    </form>
</template>



<script setup>
    import {ref} from "vue" //refの略はreactiveで、変数をリアクティブ(変更を検知できるようにする)
    const city = ref("")

    //submitFormからApp.vueのgetWeatherを呼び出す
    const emits = defineEmits(["submit-form"])

    const submitForm = () => {
        emits("submit-form", city.value) //londonではなく、ユーザーが入力した都市名を渡す
    }
</script>



<style >
    
</style>