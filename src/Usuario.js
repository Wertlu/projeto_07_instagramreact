export default function Usuario(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.id}.svg`} />
            <div class="texto">
                <strong>{props.id}</strong>
                {props.apelido}
            </div>
        </div>
    );
}