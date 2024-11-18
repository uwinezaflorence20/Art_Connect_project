import classNames from 'classnames';


import { HiOutlineLogout } from 'react-icons/hi';
import {DASHBOARD_SIDEBAR_LINKS} from  '../../library/consts/Navigation'
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../library/consts/Navigation';

const linkClasses =
  "flex item-center  relate gap-2 font-light px-3 py-2 hover:bg-white hover:text-[#8a9de9] hover:no-underline rounded-sm text-base ";


 export default function SidebarAdmin() {
  return (
    <div className=" bg-orange-500  w-60 p-3 flex flex-col text-white ">
      <div className="flex items-center gap-2 px-1 py-3">
        
        <span className="text-orange-100 text-2xl font-bold">ArtConnect</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex  flex-col gap-0.5 pt-2 border-t border-orange-400">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
         <Link to="/">   <div className={classNames('text-orange-100 cursor-pointer', linkClasses)}> 
      <span className='text-xl'><HiOutlineLogout /></span>
          Logout
         </div></Link>
        
      </div>
    </div>
  );
}
function SidebarLink({ item }){

  const { pathname }= useLocation()


  return (
    <Link to={item.path} className={ classNames (pathname == item.path ? '  text-white': '', linkClasses)}>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
  )
}

 
