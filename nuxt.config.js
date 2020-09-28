export default {
    target: 'static',
    generate: {
        fallback: false
    },
    head:  {
        link: [{
            rel: 'stylesheet',
            href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'
        }, {
            rel: 'stylesheet',
            href: '//cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css'
        }]
    },
    css: [
        'vue-material/dist/vue-material.min.css',
        'vue-material/dist/theme/default.css'
    ],
    plugins: ['@/plugins/vue-material.js']
}
