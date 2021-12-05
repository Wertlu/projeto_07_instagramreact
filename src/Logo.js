import IonIcon from "./IonIcon";
export default function Logo() {
    return (
        <>
            <div class="logo">
                <IonIcon name="logo-instagram"/>
                <div class="separador"></div>
                <img src="assets/img/logo.png" />
            </div>

            <div class="logo-mobile">
                <IonIcon name="logo-instagram"/>
            </div>

            <div class="instagram-mobile">
                <img src="assets/img/logo.png" />
            </div>
        </>
    );
}