<template>
    <div class="topbar">
        <div class="topbar__logo">
            <img :src="logo" alt="logo" class="logo" />
        </div>
        <ul class="nav">
            <li class="nav__item"><router-link :to="{name: 'webShop'}">Пиццы</router-link></li>
            <li class="nav__item"><router-link :to="{name: 'cart'}">Корзина</router-link></li>
            <li class="nav__item"><router-link :to="{name: 'payment'}">Оплата</router-link></li>
        </ul>
    </div>
</template>

<script>
import logo from '../assets/logo.png';
export default {
    name: "AppTopbar",
    data() {
        return {
            logo: logo,
        }
    }
};
</script>

<style lang="scss" scoped>
 .topbar {
    background: rgb(19, 16, 24);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    .topbar__logo {
        height: 90px;
        max-width: 100px;
        .logo {
            height: 100%;
            width: 100%;
        }
    }
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        .nav__item {
            color: white;
            font-size: 25px;
            font-weight: 700;
        }
        a {
            color: white;
        }
    }
 }
</style>