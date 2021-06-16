import './index.css'
import "@src/common/css/anime.css"
// components
// logo
import '@src/common/components/Logo/logo.css'
// Hidden_Gems/Easter_Eggs/
import './particle-animation.js'
import '@src/common/js/titleChange.js'

document.addEventListener('click', () => {
    // import('@src/plugins/live2d')
    import(/* webpackChunkName: "live2d/live2d-vendors" */ '@src/plugins/live2d')
}, { once: true })
// let ORZ = "这是首页"
// console.log(ORZ)