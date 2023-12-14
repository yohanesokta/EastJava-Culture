let keadaan = 1;
let mundur = 0;

export default function BtnControl(aksi) {

    let props = document.getElementById("longkonten");

    if (aksi == "kiri") {
        if (keadaan == 1) {
            mundur = 970;
            keadaan = 2;
        } else if (keadaan == 2) {
            mundur = 970 * 2;
            keadaan = 3;
        } else {
            mundur = 0;
            keadaan = 1;
        }
    } else if (aksi == "kanan") {
        if (keadaan == 1) {
            mundur = 970 * 2;
            keadaan = 3;
        } else if (keadaan == 3) {
            mundur = 970;
            keadaan = 2;
        } else {
            mundur = 0;
            keadaan = 1;
        }
    }
    
    console.log(mundur);
    props.style.marginLeft = -mundur + "px";

};
