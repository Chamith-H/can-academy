import "../../Styles/Pages/Home.css"
import HeroContent from "../../Assets/Images/Home/HeroContent.png"
import About from "../../Assets/Images/Home/AboutHome.png"
import Categories from "../../StaticData/Categories"
import Benefits from "../../StaticData/Benefits"
import TCousres from "../../StaticData/TCourses"
import FinalImage from "../../Assets/Images/Home/FinalImage.png"
import Bubble from "../../Assets/Images/Home/BenefitBackground.png"

import Student from "../../Assets/Images/Home/Students.jpg"
import Instructor from "../../Assets/Images/Home/Instructors.jpg"

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

            <div className="Main-Categories px-5 pb-4">
                <div className="row gx-3 gy-0 px-5 pt-5 pb-5">
                    <h2 className="text-center mt-5 mb-5">EXPLORE OUR <span>CATEGORIES</span></h2>

                    {Categories.map((category) => (
                        <div className="col-3 pt-4 pb-1">
                            <div className="Single-Category">
                                <div className="Category-Image py-3">
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

            <div className="Services px-5 py-5">
                <div className="row gy-0 px-5 pb-2">
                    <h2 className="text-center pt-5">ABOUT <span>CAN ACADEMY</span></h2>

                    <div className="row g-0 pt-4">
                        <div className="col-6 Service-Image px-xl-4">
                            <img src={About} alt="" />
                        </div>

                        <div className="col-6 About-Home-Content pt-5">
                            <h6>Meaningful alternative to thrive</h6>
                            <p className="mt-3">The word CAN brings out the true nature of every human being living on this planet. Can Academy (Pvt) Ltd was founded with the very belief that everyone experiences the highest degree of happiness when they achieve what they were made for. We help you spark that understanding and fearlessly drive towards that world you envision by connecting the best teachers/ mentors/ coaches from around the world. Let us work towards greater opportunities, for you, for others, and for us. Be part of something AMAZING. No guessing. You don’t have to do it alone anymore; we will be with you every step of the way.</p>

                            <div className="About-Learn-More">
                                <button className="mt-0">Learn More &nbsp;<i class="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Benefits px-5 py-5 bg-white Benefit-Row">

                <img src={Bubble} className="Benefit-Background" alt="" />

                <div className="row g-0 px-5 pb-5 Benefit-Contents">
                    <h2 className="text-center pt-5 pb-5">SEE OUR <span>BENEFITS</span></h2>

                    <div className="col-6 Students">
                        <div className="Benefit-Icon">
                            <div className="Student-Icon me-3">
                                <img src={Student} alt="" />

                                <div className="Benefits-Head">
                                    <h5 className="pt-3 pb-4">For Students</h5>
                                </div>
                            </div>
                        </div>

                        <ul className="Benefit-List mt-3">
                            {Benefits.students.map((benefit) => (
                                <li>{benefit}</li>
                            ))}
                        </ul>

                        <button className="mt-3">Register Now</button>
                    </div>

                    <div className="col-6 Instructors">
                        <div className="Benefit-Icon">
                            <div className="Instructor-Icon ms-3">
                                <img src={Instructor} alt="" />

                                <div className="Benefits-Head">
                                    <h5 className="pt-3 pb-4">For Instructors</h5>
                                </div>
                            </div>
                        </div>

                        <ul className="Benefit-List mt-3 ms-2">
                            {Benefits.instructors.map((benefit) => (
                                <li>{benefit}</li>
                            ))}
                        </ul>

                        <button className="mt-3 ms-3">Register Now</button>
                    </div>
                </div>
            </div>

            <div className="Trendings px-5 py-5">
                <div className="px-5 pb-5">
                    <h2 className="text-center pt-4">THIS WEEK'S <span>TRENDINGS</span></h2>
                </div>
            </div>

            <div className="Trending-Content px-5 pb-5">
                <div className="row g-0 px-5 Trending- pb-5">
                    {TCousres.map((trending) => (
                        <div className="col-3 gx-3">
                            <div className="Single-Trend">
                                <img src={trending.image} alt="" />

                                <div className="Trend-Name py-2 px-3">
                                    <h6>{trending.name}</h6>
                                    <p>{trending.status}</p>

                                    <div className="Ratings">
                                        {['','','','',''].map((elements, index) => (
                                            <div className={(trending.stars - 1) >= index ? "Light-Star":"Dark-Star"}>
                                                <i class="bi bi-star-fill"></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="Home-Final px-5 pb-5 bg-white">
                <div className="row g-0 px-5 pb-1">
                    <h2 className="text-center pb-4">GET READY TO LEARN AND GROW <span>YOUR SKILLS</span></h2>

                    <div className="col-6 Final-Quote">
                        <p>Our learning platform is designed to help you achieve your full potential. Whether you're a student seeking to acquire new knowledge and skills or a teacher looking to inspire and empower your students, we provide a range of tools and resources to help you succeed. Our courses are created and taught by passionate and experienced instructors who are committed to providing an engaging and enriching learning experience. You'll have access to a variety of interactive features, including live sessions, quizzes, and assignments, that will help you track your progress and reinforce your learning. So get ready to learn and grow your skills with us!</p>

                        <button className="mt-2">Find a Course</button>
                    </div>

                    <div className="col-6 Final-Image ps-5">
                        <img src={FinalImage} alt="" />
                    </div>
                </div>
            </div>

            <div className="Home-Ending px-5 bg-white pb-5">
                <div className="px-5 pb-4">
                    <div className="Align-Quote py-4">
                        <h5 className="px-5">" Imagination is more important than knowledge. For knowledge is limited to all we know and understand, while imagination embraces the entire world, and all there ever will be to know and understand. "</h5>
                        <p className="text-center mt-2">- Albert Einstein -</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;