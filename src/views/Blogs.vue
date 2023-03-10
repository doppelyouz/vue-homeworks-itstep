<template>
    <div class="blogs">
        <blog v-for="blog in blogs" :key="blog?.id" :blog="blog" @add="addComment"/>
    </div>
</template>

<script>
    import Blog from '@/components/Blog';
    export default {
        name: 'AppBlogs',
        components: { 
            Blog 
        },
        methods: {
            addComment({id, comment}) {
                this.blogs = this.blogs.map(blog => {
                    if(blog?.id == id) {
                        blog.comments.push(comment);
                        console.log(blog.comments);
                        return blog
                    } 
                    return blog
                })
            }
        },
        data() {
            return {
                blogs: [
                    {
                        id: 1,
                        article: {
                            title: "asdd111",
                            body: "asdasdsadasdsa gwergwer wrgrwga 43 w5t4334g fwafawfa"
                        },
                        img: 'https://klike.net/uploads/posts/2020-01/1578212659_1.jpeg',
                        comments: []
                    },
                    {
                        id: 2,
                        article: {
                            title: "asdd2222",
                            body: "asdasdsadasdsa gwergwer wrgrwga 43 w5t4334g afwawf wafawfawfawf"
                        },
                        img: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
                        comments: []
                    },
                    {
                        id: 3,
                        article: {
                            title: "asdd333",
                            body: "asdasdsadasdsa gwergwer wrgrwga 43 w5t4334gfafawf aawfawfawfwa"
                        },
                        img: 'https://static-cse.canva.com/blob/846900/photo1502082553048f009c37129b9e1583341920812.jpeg',
                        comments: []
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .blogs {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
</style>