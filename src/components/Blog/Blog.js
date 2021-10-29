import React from 'react';
import agentPic from '../../images/agents/agent-bg1.jpg'
import './Blog.css'

const Blog = () => {

    const cardData = [
        {
            authorName: 'John',
            authorImage: "https://randomuser.me/api/portraits/men/73.jpg",
            title: "this is blog card title",
            time: "2nd june. 20min ago"
        },
        {
            authorName: 'John',
            authorImage: "https://randomuser.me/api/portraits/men/73.jpg",
            title: "this is blog card title",
            time: "2nd june. 20min ago"
        },
        {
            authorName: 'John',
            authorImage: "https://randomuser.me/api/portraits/men/73.jpg",
            title: "this is blog card title",
            time: "2nd june. 20min ago"
        }
    ]

    return (
        <div className="container">
            <div className="mt-5 d-flex justify-content-center align-content-center">
                <div class="card mb-3 mt-5" style={{ maxWidth: "1040px", height: "21rem" }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={agentPic} class="img-fluid rounded" style={{ height: "21rem" }} alt="..." />
                        </div>
                        <div class="col-md-6 p-3">
                            <div class="card-body">
                                <h5 class="card-title">This is blog title.</h5>
                                <div class="author mt-3">
                                    <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="" class="avatar" />
                                    <div class="name"><a>shu3aybbadran</a></div><br />
                                    <div class="meta">29 june. 2 min ago</div>
                                </div>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam molestiae minima ratione corporis tenetur ipsa atque iure nesciunt vitae similique dolorum facilis fugiat quasi maxime quibusdam, nemo reiciendis amet nulla veniam culpa! Deserunt laboriosam delectus sit, repellat error quod inventore molestiae! Nobis facere incidunt ullam voluptate! Dignissimos, rerum molestias..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

                {
                    cardData.map(data =>
                        <div className="col-md-4">
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={data.authorImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{data.title}</h5>
                                    <div class="author mt-3">
                                        <img src={data.authorImage} alt="" class="avatar" />
                                        <div class="name"><a>{data.authorName}</a></div><br />
                                        <div class="meta">{data.time}</div>
                                    </div>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Blog;