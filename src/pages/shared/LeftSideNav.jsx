import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div>
      {/* All Categories */}
      <div className='md:mb-7'>
        <h2 className="text-lg md:text-xl text-[#403F3F] font-semibold mb-5 md:mb-7">All Categories</h2>
        <div className='flex md:block flex-wrap gap-4'>
          {
            categories.map(category => <NavLink className='block font-medium text-lg md:text-xl text-[#9F9F9F] md:mb-7' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
          }
        </div>

      </div>
      
    </div>
  );
};

export default LeftSideNav;