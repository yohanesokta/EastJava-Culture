export default function KirimControl(id){
    let txt = document.getElementById(`userinput${id}`)
    let username = document.getElementById('username')
    let userimage = document.getElementById('userimage')
    if(String(username.value).length <= 0){
        console.log('belum login')
    }else{
        console.log(`isi = ${txt.value} | username = ${username.value} | userimage = ${userimage.value}`)
    }
}