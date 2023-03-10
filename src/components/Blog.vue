<template>
    <div class="blog">
        <div class="blog__image">
            <img :src="blog.img" alt="blog__image">
        </div>
        <Article :article="blog?.article"/>
        <Comment :id="blog?.id" :comments="blog?.comments" @add-comment="addCom" />
    </div>
</template>

<script>
    import Article from './Article.vue';
    import Comment from './Comment.vue';

    export default {
        name: 'AppBlog',
        emits: ['add'],
        props: {
            blog: {
                type: Object,
                required: true
            }
        },
        components: {
            Article, Comment
        },
        methods: {
            addCom(newComment) {
                this.$emit('add', newComment)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        border: 1px solid gold;
        padding: 15px;
        border-radius: 10px;
        gap: 20px;
        .blog__image {
            max-width: 600px;
            img {
                border-radius: 30px;
                width: 100%;
                object-fit: cover;
            }
        }
    }
</style>