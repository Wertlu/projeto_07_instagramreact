import Usuario from "./Usuario";
import Sugestao from "./Sugestao";
export default function SideBar() {
    const sugestoes =
        [{
            usuario: "bad.vibes.memes",
            razao: "Segue você"
        },

        {
            usuario: "chibirdart",
            razao: "Segue você"
        },

        {
            usuario: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },

        {
            usuario: "adorable_animals",
            razao: "Segue você"
        },

        {
            usuario: "smallcutecats",
            razao: "Segue você"
        }]

    return (
        <div class="sidebar">
            <Usuario id="catanacomics" apelido="Catana" />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(sugestao => <Sugestao usuario = {sugestao.usuario} razao = {sugestao.razao} />)}
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}