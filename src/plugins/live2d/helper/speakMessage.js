export default function bindSpeech(dom) {
    let sayAWord = '说点什么呢'
    let ctrl = document.createElement('div')
    ctrl.style.cssText = `
    position:absolute;
    top:-5px;
    left:-5px;
    width:10px;
    height:10px;
    border-radius:50%;
    cursor:pointer;
    background-color:greenyellow;
    `
    dom.appendChild(ctrl)
    ctrl.addEventListener('click', () => {
        let synth = window.speechSynthesis
        let utt = new SpeechSynthesisUtterance(sayAWord)
        utt.lang = "zh-CN"
        console.log(synth.getVoices())
        synth.speak(utt)
    })
    return {
        setSpeakWord(text) {
            sayAWord = text
        }
    }
}