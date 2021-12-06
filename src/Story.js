export default function Story(props){
    return(
        <div class="story">
        <div class="imagem">
          <img src={`assets/img/${props.imgUsuario}`}/>
        </div>
        <div class="usuario">
          {props.usuario}
        </div>
      </div>
    );
}