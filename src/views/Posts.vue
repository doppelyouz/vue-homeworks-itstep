<template>
  <div class="space">
    <div class="createPost">
      <form class="form">
        <div class="form__input-block">
          <div class="form__input-name">Title:</div>
          <input type="text" v-model="title">
        </div>
        <div class="form__input-block">
          <div class="form__input-name">Description:</div>
          <textarea type="text" v-model="description"></textarea>
        </div>
        <div class="form__input-block">
          <div class="form__input-name">Цвет: </div>
          <select v-model="color">
            <option disabled value="">Выберите цвет из вариантов</option>
            <option value="green">Зеленый</option>
            <option value="red">Красный</option>
            <option value="blue">Синий</option>
          </select>
        </div>
        <div class="form__input-block">
          <div class="form__input-name">Цвет фона: </div>
          <select v-model="backgroundColor">
            <option disabled value="">Выберите цвет фона из вариантов</option>
            <option value="Gainsboro">Серый</option>
            <option value="SlateBlue">Фиолетовый</option>
            <option value="SteelBlue">Голубой</option>
          </select>
        </div>
        <div class="form__input-block">
          <div class="form__input-name">Размер шрифта: </div>
          <select v-model="fontSize">
            <option disabled value="">Выберите размер шрифта из вариантов</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
          </select>
        </div>
        <div class="form__input-block">
          <div class="form__input-name">Начертание шрифта: </div>
          <select v-model="fontType">
            <option disabled value="">Выберите размер шрифта из вариантов</option>
            <option value="italic">Курсив</option>
            <option value="bold">Жирный</option>
          </select>
        </div>
        <button class="createPostBtn" @click="addPost()">Create post</button>
      </form>
    </div>
    <div class="posts">
      <div v-for="post in posts" :key="post.id" :style="{ 'background-color': post.backgroundColor}" class="post">
        <div :style="{ color: post.color, fontSize: Number(post.fontSize) + 'px', fontStyle: post.fontType}">
          {{ post.title }}
        </div>
        <div class="post__desc">
          {{ post.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppPosts",
    data() {
      return {
        title: '',
        description: '',
        color: 'black',
        backgroundColor: 'Lavender',
        fontSize: 9,
        fontType: 'normal',
        posts: []
      }
    },
    methods: {
      addPost() {
        if (this.title.length > 0 && this.description.length > 0) {
          this.posts.push({
            id: `id-${Date.now()}`,
            title: this.title,
            description: this.description,
            color: this.color,
            backgroundColor: this.backgroundColor,
            fontSize: this.fontSize,
            fontType: this.fontType
          })
          this.title = "";
          this.description = "";
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  .space {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .posts {
      display: flex;
      max-width: 1200px;
      width: 100%;
      gap:30px;
      margin-bottom: 25px;
      .post {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 30px;
        width: 33.333%;
        color: white;
        padding: 25px 20px;
        .post__desc {
            word-break: break-all;
        }
      }
    }

    .createPost {
      max-width: 600px;
      width: 100%;
      background-color: white;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 25px;

      .form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .createPostBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          max-width: 200px;
          width: 100%;
          padding: 10px 0px;
          border-radius: 10px;
          background-color: SteelBlue;
          color: white;
          font-size: 25px;
        }

        .form__input-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          .form__input-name {
            font-size: 25px;
          }

          input {
            width: 100%;
            padding: 15px 10px;
            border-radius: 10px;
            border: 1px solid black;
          }

          select {
            width: 100%;
            padding: 15px 10px;
            border-radius: 10px;
            border: 1px solid black;
            font-size: 20px;
          }

          textarea {
            width: 100%;
            min-height: 100px;
            padding: 15px 10px;
            border-radius: 10px;
            border: 1px solid black;
          }
        }
      }
    }
  }
</style>