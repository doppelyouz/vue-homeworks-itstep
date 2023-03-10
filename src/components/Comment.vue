<template>
    <div class="comments" v-if="comments.length > 0">
        <div class="comments__title">Комментарии: </div>
        <div class="comment" v-for="comment in comments" :key="comment">{{ comment }}</div>
        <div class="comments__count">Кол-во: {{ comments.length }}</div>
    </div>
    <div v-else class="nocom">Комментарии отсутствуют</div>
    <form @submit="addComment" class="formAddCom">
        <input type="text" placeholder="Добавить комментарий" class="addCom" v-model="comment">
        <button type="submit" class="btnAddCom">Добавить</button>
    </form>
</template>

<script>
    export default {
        name: 'AppComment',
        emits: ['add-comment'],
        props: {
            comments: {
                type: Array, 
                required: true
            },
            id: {
                type: Number, 
                required: true
            },
        },
        data() {
            return {
                comment: ''
            }
        },
        methods: {
            addComment(event) {
                event.preventDefault();
                if(this.comment.length > 0) {
                    this.$emit('add-comment', {
                        id: this.id, 
                        comment: this.comment
                    })
                    this.comment = '';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nocom {
        color:white;
        font-size: 25px;
        font-weight: 700;
    }
    .addCom {
        width: 100%;
        padding: 15px;
        border-radius: 10px;
    }
    .comments {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 15px;
            color:white;
        .comments__title {
            font-size: 25px;
            font-weight: 700;
        }
        .comment {
            font-size: 25px;
        }
        .comments__count {
            font-size: 15px;
        }
    }
    .formAddCom {
        display: flex;
        justify-content: start;
        align-items: end;
        gap: 20px;
        .btnAddCom {
            padding: 5px;
            border-radius: 10px;
        }
    }
</style>