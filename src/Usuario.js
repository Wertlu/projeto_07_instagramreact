export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.imgUsuario}`} />
            <div class="texto">
                <strong>{props.id}</strong>
                {props.apelido}
            </div>
        </div>
    );
}