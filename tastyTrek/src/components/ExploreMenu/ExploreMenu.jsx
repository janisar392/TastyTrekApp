import React from 'react';
import { categories } from '../../assets/assets';
import './ExploreMenu.css';
import { useRef } from 'react';


const ExploreMenu = () => {

    const menuRef =useRef(null);
    const scrollLeft = () => {
        if(menuRef.current){
            menuRef.current.scrollBy({left: -200, behavior: 'smooth'});
        }
    };

    const scrollRight = () => {
        if(menuRef.current){
            menuRef.current.scrollBy({left: 200, behavior: 'smooth'});
        }
    };
  return (
    <div className="explore-menu position-relative">
        <h1 className="d-flex align-items-center justify-content-between">
            Explore our Menu
            <div className="d-flex">
            <i className='bi bi-arrow-left-circle scroll-icon' onClick={scrollLeft}></i>
            <i className='bi bi-arrow-right-circle scroll-icon'onClick={scrollRight}></i>
        </div>
        </h1>
        <p>Explore curated lists of dishes from top categories</p>
        <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list" ref={menuRef}>
            {
                categories.map((item ,index) => {
                    return(
                        <div key={index} className="text-center explore-menu-list-item">
                           <img src={item.icon} alt="" className='rounded-circle' height={128} width={128}></img>
                           <p className='mt-2 fw-bold'>{item.category}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExploreMenu;