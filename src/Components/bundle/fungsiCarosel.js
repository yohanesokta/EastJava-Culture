function Carosel() {
    var banter = 5
    let caroselDom = document.querySelector(".carosel")
    // caroselDom.style.marginLeft = '-100%'
    let caroselItems = 0 // 0 - 1 - 2 - -3 [0]

    function cek() {
        if (caroselItems == 0) {
            caroselDom.classList.add('carosel-animate');
            caroselDom.style.marginLeft = '-100%'
            caroselItems = 1
        }else if ( caroselItems == 1){
            caroselDom.style.marginLeft = '-200%'
            caroselItems = 2
        }else{
            caroselDom.style.marginLeft = '-300%'
            caroselItems = 3
            setTimeout(()=>{
            caroselDom.classList.remove('carosel-animate');
                caroselDom.style.marginLeft = '0'
                caroselItems = 0
            },2200)
        }
    }
    const caro = setInterval(cek,banter * 1000)
}
export default Carosel