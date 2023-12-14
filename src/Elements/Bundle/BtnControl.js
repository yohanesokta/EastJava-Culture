let keadaan = 0;
let mundur = 0;

function animate(object, changObject, value) {
    object.style.opacity = 0;
    setTimeout(() => {
        changObject.style.marginLeft = -value + "px"
        object.style.opacity = 1;
    }, 500)
}

function calculateSize(def){
    let screen = window.screen.width
    if(screen >= 1120){
        return(4)
    }else if(screen <= 1120 && screen >= 860){
        return(3)
    }else if(screen <= 860 && screen >= 610){
        return(2)
    }else{
        return(1)
    }
}

export default function BtnControl(aksi,MaxKeadaan) {
    let props = document.getElementById("longkonten");
    let conProps = document.getElementById("container-content");
    let size = 240 * calculateSize()
    MaxKeadaan = MaxKeadaan / calculateSize()

    if (aksi == "kiri") {
        if (keadaan == MaxKeadaan){
            mundur = 0;
            keadaan = 1;
        }else{
            mundur = size*keadaan;
            keadaan += 1;
        }
    }else{
        if (keadaan <= 0){
            mundur = 0;
            keadaan  = MaxKeadaan;
        }
        else{
            mundur = size*keadaan;
            keadaan -= 1;
        }
    }
    animate(conProps,props ,mundur)
}


//  function BtnControl2(aksi) {
//     let props = document.getElementById("longkonten");
//     let conProps = document.getElementById("container-content")
//     if (aksi == "kiri") {
//         if (keadaan == 1) {
//             mundur = 970;
//             keadaan = 2;
//         } else if (keadaan == 2) {
//             mundur = 960 * 2;
//             keadaan = 3;

//         } else {
//             mundur = 0;
//             keadaan = 1;

//         }
//     } else if (aksi == "kanan") {
//         if (keadaan == 1) {
//             mundur = 960 * 2;
//             keadaan = 3;

//         } else if (keadaan == 3) {
//             mundur = 970;
//             keadaan = 2;
//         } else {
//             mundur = 0;
//             keadaan = 1;
//         }
//     }
//     animate(conProps, props, mundur)
// };
