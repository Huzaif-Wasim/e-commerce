import { Category } from "../category-item/category-item.component"
import './categories.styles.scss'
export const Directory = ({categories}) =>{
    console.log("Inside Directory");
    
    return(
        <div className="directory-container">
        {categories.map(
            category => 
            <Category key={category.id} category={category}/>
        )}
        </div>
        
    )
}