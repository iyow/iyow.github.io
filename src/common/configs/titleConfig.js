import { random } from '@src/common/js/utils.js'

export const titleList = {
    monster: {
        visible: '抓到你啦!',
        hidden: "咦~我的小怪兽呢?"
    },
    emoticons: {
        visible: '٩(๑❛ᴗ❛๑)۶',
        hidden: '(*/ω＼*)'
    }
}
const titleTextKeys = Object.keys(titleList)
const titleTotal = titleTextKeys.length
const chooseText = titleList[titleTextKeys[random(0, titleTotal - 1)]]
export const TITLE = {
    text: chooseText
}