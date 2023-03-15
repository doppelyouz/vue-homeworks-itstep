<template>
    <div v-if="lengthOfIndexes === lengthOfWord && attempts < 10">
        <div class="winner__loser">You won!</div>
        <button @click="this.$router.go(0);" class="reset">Reset</button>
    </div>
    <div v-if="attempts >= 10">
        <div class="winner__loser">You lose!</div>
        <button @click="this.$router.go(0);" class="reset">Reset</button>
    </div>
    <ul class="letters" v-else>
        <li v-for="letter, i in letters" :key="i">
            <letter :letter="letter" :indexes="indexes" :index="i"/>
        </li>
    </ul>
    
    <h2 v-if="mistakes.length > 0">Your mistakes: </h2>
    <div class="mistakes">
        <div v-for="mistake in mistakesUniq" :key="mistake">{{ mistake }}</div>
    </div>
</template>

<script>
    import Letter from './Letter.vue';
    export default {
        name: "AppLetters",
        props: {
            letters: {
                type: String,
                required: true
            },
            attempts: {
                type: Number,
                required: true
            },
            indexes: {
                type: Array,
                required: true
            },
            mistakes: {
                type: Array,
                required: true
            },
            foundLetters: {
                type: Array,
                required: true
            },
        },
        computed: {
            lengthOfIndexes() {
                return this.indexes.length
            }, 
            lengthOfWord() {
                return this.letters.length
            }, 
            mistakesUniq() {
                const newSet = new Set(this.mistakes); 
                const uniqueMistakes = Array.from(newSet); 
                return uniqueMistakes
            }
        },
        components: {
            Letter
        }
    }
</script>

<style lang="scss" scoped>
    .letters {
        display: flex;
        gap: 10px;
        li {
            list-style-type: none; 
        }
    }
    .mistakes {
        display: flex;
        gap: 10px;
        font-size: 25px;
    }
    .winner__loser {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 25px;
    }
    button {
        width: 100%;
        background: orange;
        border: 1px solid black;
        padding: 8px 12px;
        font-size: 16px; 
        border-radius: 3px;
    }
</style>