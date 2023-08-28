import "./index.css"
import CreateButton from "./components/CreateButton"
import iconFriends from "./assets/friends.svg"
import iconCommunity from "./assets/community.svg"
import iconGames from "./assets/games.svg"
import { useState } from "react"

export default function App() {
    const [ textPost, setTextPost ] = useState("")
    const [ listPosts, setListPosts ] = useState([])

    const postSubmit = (ev) => {
        ev.preventDefault()

        const newPost = {
            id: Math.floor(Math.random() * 1000000),
            textPost: textPost,
            postedAt: new Date()
        }

        setListPosts((state) => [newPost, ...state])
        setTextPost("")
    }

    const enterPostSubmit = (ev) => {
        ev.preventDefault()
        document.getElementById("buttonPostSubmit").click()
    }

    return (
    <>
        <header>
            <div className="brand">
                <h1 className="brandTitle">orkut</h1>
            </div>

            <nav id="navBar">
                <div className="navItem">
                    <img src={iconFriends} width={36} height={36}/>
                    
                </div>

                <div className="navItem">
                    <img src={iconCommunity} width={36} height={36}/>
                    
                </div>

                <div className="navItem">
                    <img src={iconGames} width={36} height={36}/>
                    
                </div>
            </nav>
        </header>

        <main>
            <section id="profile">
                <div id="profileCard">
                    <div className="profileCardTop">
                        <h3>Perfil</h3>
                    </div>
                </div>
            </section>

            <section id="content">
                <div id="contentPost">
                    <form onSubmit={postSubmit}>
                        <textarea
                            placeholder="Você está pensando em que?"
                            name="createPost"
                            id="createPost"
                            rows="1"
                            required
                            value={textPost}
                            onChange={(ev) => setTextPost(ev.target.value)}
                            onKeyDown={(ev) => ev.key === "Enter" ? enterPostSubmit(ev) : null}
                        >
                            
                        </textarea>
                        <button id="buttonPostSubmit" type="submit">Publicar</button>
                    </form>

                    <div id="listPosts">
                        {listPosts.length > 0 ? (listPosts.map((post) => (
                            <div className="postItem" key={post.id}>
                                <h4>Gustavo Andriani</h4>
                                <span>Publicado em {post.postedAt.toLocaleString()}</span>
                                <br />
                                <p>{post.textPost}</p>
                            </div>
                        ))
                        ) : 
                        <div className="postItem" style={{textAlign: "center", placeContent: "center"}}>
                            <p>Nada para mostrar no feed de noticias!</p>
                        </div>
                    }
                    </div>
                </div>
            </section>

            <section id="others">
                <div className="communitys">
                    <h3>Comunidades</h3>
                    <hr />
                    <CreateButton texto={"Criar comunidade"} />
                </div>

                <div className="games">
                    <h3>Jogos</h3>
                    <hr />
                    <CreateButton texto={"Descobrir jogos"} />
                </div>
            </section>
        </main>
    </>

    )
}