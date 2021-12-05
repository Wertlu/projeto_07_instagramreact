import Post from "./Post";
export default function Posts() {
    const posts =
        [{
            usuario: "meowed",
            conteudo: "gato-telefone",
            curtidor: "respondeai",
            curtidas: "101.523"
        },

        {
            usuario: "barked",
            conteudo: "dog",
            curtidor: "adorable_animals",
            curtidas: "99.159"
        }]

    return (
        <div class="posts">
            {posts.map(post => <Post usuario={post.usuario}
                conteudo={post.conteudo}
                curtidor={post.curtidor}
                curtidas={post.curtidas} />)}
        </div>
    );
}