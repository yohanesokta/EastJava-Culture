export default function QuestControl(tag) {
    let object = document.getElementById(tag)

    if (object.classList.contains('active')) {
        object.classList.remove('active')
    } else {
        object.classList.add('active')
    }
}