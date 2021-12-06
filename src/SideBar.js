import Usuario from "./Usuario";
import Sugestao from "./Sugestao";
export default function SideBar() {
    const sugestoes =
        [{
            usuario: "bad.vibes.memes",
            imgUsuario:"bad.vibes.memes.svg",
            razao: "Segue você"
        },

        {
            usuario: "chibirdart",
            imgUsuario:"chibirdart.svg",
            razao: "Segue você"
        },

        {
            usuario: "razoesparaacreditar",
            imgUsuario:"razoesparaacreditar.svg",
            razao: "Novo no Instagram"
        },

        {
            usuario: "adorable_animals",
            imgUsuario:"adorable_animals.svg",
            razao: "Segue você"
        },

        {
            usuario: "smallcutecats",
            imgUsuario:"smallcutecats.svg",
            razao: "Segue você"
        }]

    return (
        <div class="sidebar">
            <Usuario imgUsuario= "catanacomics.svg" id="catanacomics" apelido="Catana" />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(sugestao => <Sugestao imgUsuario = {sugestao.imgUsuario} usuario = {sugestao.usuario} razao = {sugestao.razao} />)}
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