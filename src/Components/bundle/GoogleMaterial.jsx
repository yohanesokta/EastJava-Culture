export default function Gmaterial(props) {
  if(props.hide ?? "false" == "yes"){
    return (
      <span className="material-symbols-outlined hide">{props.name}</span>
    );
  }else{
  return (
      <span className="material-symbols-outlined">{props.name}</span>
  );}
}
