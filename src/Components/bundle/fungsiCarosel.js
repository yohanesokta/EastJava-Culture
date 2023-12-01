function Carosel() {

    let caroselDom = document.querySelector(".carosel")
    // caroselDom.style.marginLeft = '-100%'
    let caroselItems = 0 // 0 - 1 - 2

    function cek() {
        if (caroselItems == 0) {
            caroselDom.style.marginLeft = '-100%'
            caroselItems = 1
        }else if ( caroselItems == 1){
            caroselDom.style.marginLeft = '-200%'
            caroselItems = 2
        }else{
            caroselDom.style.marginLeft = '0'
            caroselItems = 0
        }
        return caroselItems
    }
    const CaroselEffect = () => {

    }
    CaroselEffect()
}
export default Carosel