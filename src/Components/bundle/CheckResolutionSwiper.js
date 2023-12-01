function CheckResolution(){
    let view = 7
    const value = window.innerWidth
    if(value >= 1742) {
        view = 7
    }
    if(value <= 1740){
        view = 6;
    }
    if(value <= 1704){
        view = 4;
    }
    if(value <= 992){
        view = 3;
    }
    if(value <= 755){
        view = 2
    }
    if(value <= 490){
        view = 1
    }
    return (view)
}

export default CheckResolution