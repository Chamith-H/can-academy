import "../../Styles/Pages/Home.css"
import HeroContent from "../../Assets/Images/Home/HeroContent.png"
import Categories from "../../StaticData/Categories"

const Home =()=> {
    return (
        <div className="Home">
            <div className="Hero px-5">
                <div className="Hero-Contents px-5 py-5">
                    <div className="row gx-5 mt-4">
                        <div className="col-6 Slogan">
                            <h1>Unlock Your Potential with Personalized Learning</h1>
                            <p>Our platform provides a unique opportunity for students to pursue their interests and passions, while giving teachers the ability to share their knowledge and expertise.</p>
                            <button className="mt-2">Explore Your Potential</button>
                        </div>

                        <div className="col-6 Hero-Content-Image">
                            <img src={HeroContent} alt="" />
                        </div>

                        <div className="col-6 Counter pt-4">
                            <div className="Counter-Section">
                                <p>Students</p>
                                <h6>162</h6>
                            </div>

                            <div className="Seperater mx-5"/>

                            <div className="Counter-Section">
                                <p>Instructers</p>
                                <h6>34</h6>
                            </div>
                        </div>

                        <div className="col-6 Search-Bar pt-4">
                            <form action="">
                                <input type="text" placeholder="Explore your interests"/>
                                <button><i class="bi bi-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Main-Categories bg-white px-5">
                <div className="row gx-3 gy-0 px-5 pt-4 pb-5">
                    <h1 className="text-center mt-5 mb-4">EXPLORE OUR <span>CATEGORIES</span></h1>

                    {Categories.map((category) => (
                        <div className="col-3 pt-4">
                            <div className="Single-Category">
                                <div className="Category-Image">
                                    <img src={category.image} alt="" />
                                </div>

                                <div className="Category-Name py-2">
                                    <h6 className="text-center">{category.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;