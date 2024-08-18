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
      <div className='mb-7'>
        <h2 className="text-xl text-[#403F3F] font-semibold mb-5">All Categories</h2>
        {
          categories.map(category => <NavLink className='block font-medium text-xl text-[#9F9F9F] mb-7' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
        }

      </div>
    </div>
  );
};

export default LeftSideNav;