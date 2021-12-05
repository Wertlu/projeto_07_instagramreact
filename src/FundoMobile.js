import IonIcon from "./IonIcon";
export default function FundoMobile() {
    const caixaIcone =
        ["home",
            "search-outline",
            "add-circle-outline",
            "heart-outline",
            "person-outline"];
    return (
        <div class="fundo-mobile">
            {caixaIcone.map(ionicon => <IonIcon name = {ionicon}/>)}
        </div>
    );
}