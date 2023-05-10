import "../../Styles/Pages/Learn.css"
import CategoryLinks from "../Contents/CategoryLinks";

const Learn =()=> {
    return (
        <div className="Learn">
            <div className="Learn-Header px-4">
                <h6><i class="bi bi-grid-fill"></i> Categories</h6>

                <div className="Learn-Navigations">
                    <button><i class="bi bi-house-exclamation-fill"></i> Overview</button>
                    <button><i class="bi bi-speedometer"></i> Enrolled</button>
                    <button><i class="bi bi-yin-yang"></i> All Courses</button>
                    <button><i class="bi bi-globe-central-south-asia"></i> Trendings</button>
                </div>
            </div>

           
            <div className="Load-Learnings">
                <div className="Hearn-Bar ps-4 py-3">
                    <CategoryLinks/>
                </div>

                <div className="Learn-Contents">

                </div>
            </div>
        </div>
    )
}

export default Learn;