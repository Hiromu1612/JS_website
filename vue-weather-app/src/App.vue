<template>
    <div class="wrapper">
        <div class="container">
            <Title />
            <Form @submit-form="getWeather" />
            <Results :results="results" />
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue"; //reactive,refどっちでもよい
import axios from "axios";
import Title from "./components/Title.vue";
import Form from "./components/Form.vue";
import Results from "./components/Results.vue";
import "./assets/base.css";

const getWeather = (city) => {
    //データを取得する
    axios
        .get(
            `https://api.weatherapi.com/v1/current.json?key=fdff1d06beff4a9492e15742242008&q=${city}&aqi=no`
        )
        .then((res) => {
            (results.country = res.data.location.country), //国名
                (results.cityName = res.data.location.name), //都市名
                (results.temperature = res.data.current.temp_c), //気温
                (results.conditionText = res.data.current.condition.text), //天気の状態
                (results.icon = res.data.current.condition.icon); //画像のURL
        });
};

const results = reactive(
    //cityと違い、複数のデータを保管する
    {
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: "",
    }
);
</script>

<style></style>
