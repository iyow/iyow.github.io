import Utils from '@src/common/js/utils.js'
import './helper/live2d.js'
import './index.css'

import modelList from './data_modelPath'
import Hitokoto from './helper/messsage'

function loadStage() {
    let landlord = document.createElement('div')
    landlord.setAttribute('class', 'landlord')
    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'model')
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    canvas.setAttribute('width', width / 10)
    canvas.setAttribute('height', height / 3.5)
    let msgBox = document.createElement('div')
    msgBox.setAttribute('class', 'in-a-word vanishIn')
    msgBox.innerText = '点击随机生成一言'
    landlord.appendChild(msgBox)
    landlord.appendChild(canvas)
    document.body.appendChild(landlord)
}
async function main() {
    loadStage()
    let all = modelList.length
    loadlive2d('model', modelList[Utils.random(0, all - 1)])
    Hitokoto.initHitokoto('.in-a-word', 'vanishIn')
}
main()