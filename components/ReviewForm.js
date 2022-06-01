app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Оставить отзыв</h3>
      <label for="name">Имя:</label>
      <input id="name" v-model="name">
      <label for="review">Отзыв:</label>
      <textarea id="review" v-model="review"></textarea>
      <label for="rating">Оценка:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <label for="recommend">Вы бы порекомендовали этот продукт?</label>
      <select id="recommend" v-model="recommend">
        <option>Да!</option>
        <option>Нет!</option>
      </select>
      <input class="button" type="submit" value="Отправить">
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        recommend: null
      }
    },
    methods: {
      onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
          alert('Обзор неполный. Пожалуйста, заполните каждое поле.')
          return
        }

        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend

        }
        this.$emit('review-submitted', productReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null

      }
    }
  })