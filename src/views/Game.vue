<template>
    <div class="space">
        <find-letter @find="findLetter"/>
        <letters :letters="word" :indexes="indexes" :mistakes="mistakes" :attempts="attempts" :foundLetters="foundLetters"/>
    </div>
</template>
<script>
import Letters from '@/components/Letters'
import FindLetter from '@/components/FindLetter'

export default {
    name: 'AppGame',
    data() {
        return {
            words: ["blablabla", "asd", 'zxc'],
            indexes: [],
            word: '',
            mistakes: [],
            foundLetters: [],
            attempts: 0
        }
    },
    methods: {
        findLetter(letter) {
            let pos = this.word.indexOf(letter);
            if(pos === -1) {
                this.mistakes.push(letter);
                this.attempts++;
            } else {
                if(!this.foundLetters.includes(letter)) {
                    while (pos !== -1) {
                        this.indexes.push(pos);
                        pos = this.word.indexOf(letter, pos + 1);
                        this.foundLetters.push(letter);
                    }
                }
            }
        }
    },
    components: {
        Letters,
        FindLetter
    },
    mounted() {
        this.word = this.words[Math.floor(Math.random() * this.words.length)];
    }
}
</script>
<style scoped>
    .space {
        padding: 35px 0px;
        background: white;
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap:30px;
    }
</style>