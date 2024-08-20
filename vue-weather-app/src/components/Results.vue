<template>
    <div v-if="results.country" class="results-country">{{ results.country }}</div>
    <div v-if="results.cityName" class="results-city"> {{ results.cityName }}</div>
    <div v-if="results.temperature" class="results-temp">{{ results.temperature }}<span>℃</span></div>
    <div v-if="results.icon" class="results-condition">  <!--v-ifをつけると、存在するときだけ表示するから検索前は非表示-->
        <img :src="results.icon" alt="icon">
        <span>{{ results.conditionText }}</span>
    </div>
</template>



<script setup>
    const props = defineProps({ //上位コンポーネントから渡されたデータはprposと呼ばれる
        results: Object //Number, String, Boolean, Array, Object, Function, Symbol, null 今回は{}で囲まれたオブジェクト
    })
</script>



<style >
    
</style>