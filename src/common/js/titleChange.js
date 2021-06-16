import { TITLE } from '@src/common/configs/index.js'

document.addEventListener('visibilitychange', () => {
    // TODO: 刷新页面执行了函数 title 为什么未修改？
    if (document.hidden) {
        document.title = TITLE.text.hidden
    } else {
        document.title = TITLE.text.visible
    }
})