import IonIcon from "./IonIcon";
import Story from "./Story";
export default function Stories() {
  const stories = 
  [{imgUsuario: "9gag.svg", usuario: "9gag",},
  {imgUsuario: "meowed.svg", usuario: "meowed",},
  {imgUsuario: "barked.svg", usuario: "barked",},
  {imgUsuario: "nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet",},
  {imgUsuario: "wawawicomics.svg", usuario: "wawawicomics",},
  {imgUsuario: "respondeai.svg", usuario: "respondeai",},
  {imgUsuario: "filomoderna.svg", usuario: "filomoderna",},
  {imgUsuario: "memeriagourmet.svg", usuario: "memeriagourmet",}]
  return (
    <div class="stories">
      {stories.map(stories => <Story imgUsuario = {stories.imgUsuario} usuario= {stories.usuario}/>)}
      <div class="setinha">
        <IonIcon name="chevron-forward-circle"/>
      </div>
    </div>
  );
}