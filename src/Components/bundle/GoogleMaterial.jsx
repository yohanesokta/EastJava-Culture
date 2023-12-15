// Create By Yohanes Oktanio with (fonts.googleapis.com)

export default function Gmaterial(props) {
  if(props.hide ?? "false" == "yes"){
    return (
      <span className="material-symbols-outlined" id="hide">{props.name}</span>
    );
  }else{
  return (
      <span className="material-symbols-outlined">{props.name}</span>
  );}
}
