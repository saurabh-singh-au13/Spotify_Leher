import React from 'react'
import Categories from './Categories'
import ShortIntro from './ShortIntro'
import LikedSong from './LikedSong'
import PlaylistMood from './PlaylistMood'
// import Playlists from './Playlist'

const Main = () => {

    return (
        <div className="main">
            <div className="upper_nav">
                <div>
                <svg style={{marginLeft: "17px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>

                </div>

                

                {/* <div className="user">
                    Saurabh Kumar Singh

                </div> */}

            </div>
            <div className="main_component">
                <h1> For Your Listening Pleasure! </h1>

                <Categories />
            </div>
            <div className="cardWrap">


                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>

            </div>
            <div className="main_component">
                <h1>Charts </h1>
                <p>Listen to Spotify Music you like </p>

            </div>
            <div className="cardWrap">

                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>

            </div>
            <div className="cardWrap">

                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1518245646578-c6de1ad9eabd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1483032711911-cfd45aabc9a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>



                </div>

            </div>
            <div className="main_component">
                <h1> Mood </h1>
                {/* <Categories /> */}
                <PlaylistMood />
            </div>
            <div className="cardWrap">


                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1476136236990-838240be4859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>




                </div>

                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>




                </div>

                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>




                </div>

                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1526739178209-77cd6c6bcf4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=596&q=80" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />

                    </div>




                </div>

                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image" />

                    </div>
                    <div className="cardContent">
                        <LikedSong />
                        <ShortIntro />
                    </div>




                </div>



            </div>





        </div>
    )
}

export default Main
