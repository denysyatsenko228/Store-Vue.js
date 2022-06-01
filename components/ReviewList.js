app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
    }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Отзывы:</h3>
    <ul>
    <li v-for="(review, index) in reviews" :key="index">
    {{ review.name}} поставил этому товару {{ review.rating }} звезд
    <br/>
    "{{ review.review }}"
    </li>
    </ul>
    <div>
    `
})