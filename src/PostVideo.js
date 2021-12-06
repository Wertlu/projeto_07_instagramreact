import IonIcon from "./IonIcon";
export default function Post(props) {
    let caixaIcone =
        ["heart-outline",
            "chatbubble-outline",
            "paper-plane-outline"];
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`${props.imgUsuario}`} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <IonIcon name="ellipsis-horizontal" />
                </div>
            </div>

            <div class="conteudo">
                <video class="video" autoPlay muted loop>
                    <source src={`assets/video/${props.conteudo}.mp4`} type="video/mp4" />
                    <source src={`assets/video/${props.conteudo}.ogv`} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {caixaIcone.map(ionicon => <IonIcon name={ionicon} />)}
                    </div>
                    <div>
                        <IonIcon name="bookmark-outline" />
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${props.imgCurtidor}`} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidor}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}