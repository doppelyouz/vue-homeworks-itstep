<template>
    <form class="findLetter" @submit="find">
        <input v-model="letter" class="findLetterInput"/>
        <button type="submit">Найти</button>
    </form>
</template>

<script>
    export default {
        name: "AppFindLetter",
        data() {
            return {
                letter: ''
            }
        },
        methods: {
            find(event) {
                event.preventDefault();
                
                if(this.letter.length == 1) {
                    this.$emit('find', this.letter)
                }
                this.letter = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .findLetter {
        display: flex;
        align-items: center;
        gap: 20px;
        .findLetterInput {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            height: 40px;
            width: 40px;
            font-size: 40px;
            border: 1px solid black;
            border-radius: 5px;
        }
    }
</style>