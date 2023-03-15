<template>
    <div class="letter">
        <div v-for="i in indexes" :key="i">
            <div v-if="i == index">{{ letter }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppLetter",
        props: {
            letter: {
                type: String,
                required: true
            },
            indexes: {
                type: Array,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>
    .letter {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid black;
        font-size: 36px;
    }
</style>