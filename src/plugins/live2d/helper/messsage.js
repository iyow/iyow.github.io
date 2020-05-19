import hitokotoList from '../data_hitokoto'
import Utils from '@src/common/js/utils.js'
function getRandomHitokoto(list = []) {
    let max = list.length
    let rIndex = Utils.random(0, max - 1)
    let suffix = ''
    // let suffix = [' 你说呢？', ' 要开心呀!', ' 不是吗？', ' 是这样的呢~'][random(0, 3)]
    return (list[rIndex].content || '一言不足以蔽之') + suffix
}

async function initHitokoto(selector, animationClass) {
    let dom = document.querySelector(selector)
    dom.addEventListener('click', (event) => {
        dom.classList.add(animationClass)
        dom.innerText = getRandomHitokoto(hitokotoList.message)
    })
    dom.addEventListener('animationend', (event) => {
        dom.classList.remove(animationClass)

    })

}

const Interface = {
    initHitokoto
}
export default Interface