import Post from "./Post";
import PostVideo from "./PostVideo.js"
export default function Posts() {
    const posts =
        [{
            usuario: "Bônus",
            imgUsuario: "https://picsum.photos/32/32",
            conteudo: "video",
            curtidor: "respondeai",
            imgCurtidor: "respondeai.svg",
            curtidas: "101.523",
            categoria: "video"
        },
        {
            usuario: "meowed",
            imgUsuario: "meowed.svg",
            conteudo: "gato-telefone.svg",
            curtidor: "respondeai",
            imgCurtidor: "respondeai.svg",
            curtidas: "101.523",
            categoria: "imagem"
        },

        {
            usuario: "barked",
            imgUsuario: "barked.svg",
            conteudo: "dog.svg",
            curtidor: "adorable_animals",
            imgCurtidor: "adorable_animals.svg",
            curtidas: "99.159",
            categoria: "imagem"
        }]


    return (
        <div class="posts">
            {posts.filter(post => post.categoria === "video").map(post => <PostVideo
                usuario={post.usuario}
                imgUsuario={post.imgUsuario}
                conteudo={post.conteudo}
                curtidor={post.curtidor}
                imgCurtidor={post.imgCurtidor}
                curtidas={post.curtidas} />)}

            {posts.filter(post => post.categoria === "imagem").map(post => <Post
                usuario={post.usuario}
                imgUsuario={post.imgUsuario}
                conteudo={post.conteudo}
                curtidor={post.curtidor}
                imgCurtidor={post.imgCurtidor}
                curtidas={post.curtidas} />)}
        </div>
    );
}