import Logo from "./Logo";
import IonIcon from "./IonIcon";
export default function NavBar() {
  const caixaIcone =
    ["paper-plane-outline",
      "compass-outline",
      "heart-outline",
      "person-outline"];
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div class="icones">
          {caixaIcone.map(ionicon => <IonIcon name = {ionicon}/>)}
        </div>
        <div class="icones-mobile">
          <IonIcon name="paper-plane-outline" />
        </div>
      </div>
    </div>
  );
}