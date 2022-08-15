
import './category-item.styles.scss'
export const Category = ({ category }) => {
  console.log("Inside Category");
  const { title, imageUrl } = category;
  return (
    <div className='category-container'>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`,
      }} />

      <div className='category-body-container' >
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  )
}
