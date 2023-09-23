import "./index.css"
import "./media-queries.css"
import CreateButton from "./components/CreateButton"

import iconFriends from "./assets/friends.svg"
import iconCommunity from "./assets/community.svg"
import iconGames from "./assets/games.svg"
import iconProfile from "./assets/iconProfile.svg"

import iconHappyFarm from "./assets/happyFarmIcon.svg"
import iconCafeMania from "./assets/cafeManiaIcon.svg"

import iconAndroid from "./assets/iconAndroid.svg"
import iconAmazon from "./assets/iconAmazon.svg"
import iconShopify from "./assets/iconShopify.svg"

import { useState } from "react"
import OthersBox from "./components/OthersBox"

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

                <div className="navItem">
                    <img src={iconProfile} width={36} height={36}/>
                    
                </div>
            </nav>
        </header>

        <main>
            <section id="profile">
                <div id="profileCard">
                    <div className="profileCardTop">
                        <img src="https://images4.wikia.nocookie.net/__cb20130615215215/youtubepoopbr/images/thumb/c/c2/Kenny.jpg/180px-Kenny.jpg" width={180} height={180}/>
                        <h3>Username</h3>
                        <small>Idade, gênero e sexualidade</small>

                    </div>

                    <div>
                        <ul className="profileCardList">
                            <li>Meu perfil</li>
                            <li>Lista de amigos</li>
                            <li>Depoimentos</li>
                            <li>Galeria</li>
                        </ul>
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
                                <h4>{"User" + post.id}</h4>
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

                    <OthersBox titulo={"Dicas de Android"} boxIcon={iconAndroid}/>
                    <OthersBox titulo={"Promos da Amazon"} boxIcon={iconAmazon}/>
                    <OthersBox titulo={"Mestres do Drop"} boxIcon={iconShopify}/>
                </div>

                <div className="games">
                    <h3>Jogos</h3>
                    <hr />
                    <CreateButton texto={"Descobrir jogos"}/>

                    <OthersBox titulo={"Colheita Feliz"} boxIcon={iconHappyFarm}/>
                    <OthersBox titulo={"Café Mania"} boxIcon={iconCafeMania}/>
                    
                </div>
            </section>
        </main>
    </>

    )
}