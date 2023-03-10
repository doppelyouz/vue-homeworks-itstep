<template>
    <div class="article">
        <div class="article__title">
            {{ article?.title }}
        </div>
        <div class="article__body">
            {{ article?.body }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppArticle',
        props: {
            article: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .article {
        display: flex;
        flex-direction: column;
        color:white;
        gap: 20px;
        .article__title {
            font-size: 35px;
        }
    }
</style>