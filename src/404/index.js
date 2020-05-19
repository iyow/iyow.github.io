import './index.css'


document.addEventListener('click', () => {
    // import('@src/plugins/live2d')
    import(/* webpackChunkName: "live2d/live2d-vendors" */ '@src/plugins/live2d')
})
// let pagename = '404页面'
// console.log(pagename)