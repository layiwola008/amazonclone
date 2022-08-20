import './categories.css';
import MenuIcon from '@mui/icons-material/Menu';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='categoriesItems'>
        <MenuIcon />
        <ul className='catItems'>
            <li>All</li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li className='hideonMobile'>Registry</li>
            <li className='hideonMobile'>Gift Cards</li>
            <li className='hideonMobile'>Sell</li>
        </ul>
      </div>
    </div>
  )
}


export default Categories
