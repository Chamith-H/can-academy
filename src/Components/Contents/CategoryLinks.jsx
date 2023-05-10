import "../../Styles/Contents/CategoryLinks.css"
import Categories from "../../StaticData/Categories";

import { useState } from "react";

const CategoryLinks =()=> {
    const [isCategory, setIsCatecory] = useState(-1)
    const [categorySelected, setCategorySelected] = useState(false)

    const [isSubCategory, setIsSubcategory] = useState(-1)

    const change_Selection =( selected )=> {
        if(selected == isCategory) {
            setCategorySelected(!categorySelected)
        }

        else {
            setCategorySelected(true)
            setIsSubcategory(-1)
        }
    }

    const handle_Subcategory =( wanted )=> {
        setIsSubcategory(wanted)

    }

    return (
        <div className="CategoryLinks">
            {Categories.map((category, index) => (
                <div className="Single-Category mt-2">
                    <div className={(isCategory == index && categorySelected)? "Main-Category Mark-Main py-1":"Main-Category Unmark-Main py-1"} type="button" onClick={()=> {setIsCatecory(index); change_Selection(index)}}>
                        <div className="Main-Category-Tab">
                            <img src={category.image} alt="" />
                            <button>{category.title}</button>
                        </div>

                        <div className="Category-Marker"></div>
                    </div>

                    {isCategory == index && categorySelected &&(
                        <div className="Sub-Categories mb-4 pt-1">
                            {category.subcategories.map((subcategory, index) => (
                                <div className={isSubCategory == index? "Single-Sub-Category Mark-Sub my-1 py-1":"Single-Sub-Category Unmark-Sub my-1 py-1"} type="button" onClick={()=> handle_Subcategory(index)}>
                                    <button><i class="bi bi-arrow-right"></i> {subcategory.name}</button>
                                </div>
                            ))}

                            <div className="Content-Hider"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CategoryLinks;