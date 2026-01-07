new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            country: '',
            comment: ''
        },
        submitted: false
    },
    methods: {
        submitForm() {
            this.submitted = true;
        }
    }
})