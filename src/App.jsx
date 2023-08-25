import "./index.css"
import iconFriends from "./assets/friends.svg"
import iconCommunity from "./assets/community.svg"
import iconGames from "./assets/games.svg"

export default function App() {
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
                        <h3>Gustavo José Andriani</h3>
                    </div>
                </div>
            </section>

            <section id="content">
                <div id="contentPost">
                    <h4>Publicação</h4>
                </div>
            </section>

            <section id="others">
                <div className="communitys">
                    <h3>Comunidades do ORKUT</h3>
                </div>
            </section>
        </main>
    </>


    )
}