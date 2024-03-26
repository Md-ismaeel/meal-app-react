import React, { useEffect, useState } from 'react'
import axios from 'axios';
import bgImage from '../assets/bg-img-2.avif'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";


export const Search = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(prevVal => !prevVal)
    }

    const searchHandler = () => {

        const searchInput = async () => {
            try {
                const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

                console.log(response.data.meals);
                response.data.meals ? setSearchData(response.data.meals) : searchData([])
                navigate('/subcategory')
                navigate('/product')

            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        searchInput();
    }


    console.log(searchData);
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full mb-12'>
                <nav className='w-full flex justify-between items-center px-10 bg-orange-600 h-14 text-white fixed z-20'>

                    <NavLink to='/'>
                        <div className='flex justify-center items-center text-2xl'>

                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3L4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"></path>
                            </svg>
                            <span>FastEat.</span>

                        </div>
                    </NavLink>
                    <div>
                        <div>
                            <span onClick={menuHandler} className='cursor-pointer'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path></svg>
                            </span>
                        </div>
                        {showMenu === true ? <div>

                            (<ul className='w-72 absolute top-0 right-0 h-screen z-30 shadow-2xl transition-all ease-in-out duration-500 bg-white text-black flex-0 flex flex-col gap-2 text-lg py-2 px-6 border-bottom'>
                                <button onClick={menuHandler} className='w-full flex justify-end mt-4'>
                                    <svg className='text-orange-500 hover:text-slate-600' stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"></path><path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"></path>
                                    </svg>
                                </button>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Beef`}>Beef</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Chicken`}>Chicken</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Dessert`}>Dessert</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Lamb`}>Lamb</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Miscellaneous`}>Miscellaneous</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Pasta`}>Pasta</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Pork`}>Pork</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Seafood`}>Seafood</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Starter`}>Side</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Starter`}>Starter</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Vegan`}>Vegan</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Vegetarian`}>Vegetarian</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Breakfast`}>Breakfast</NavLink></li>
                                <li className='w-full border-b'><NavLink to={`/subcategory/Goat`}>Goat</NavLink></li>
                            </ul>)
                        </div>
                            : ''}
                    </div>

                </nav>

                <div className='search-form flex flex-col justify-center items-center w-full h-96 bg-no-repeat bg-center bg-cover bg-gradient-to-t' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(${bgImage})` }}>

                    <div className='flex justify-center items-center gap-1'>

                        <input type='text' onChange={(e) => setInput(e.target.value)} placeholder='Search recipes here...' className='h-10 w-96 rounded-lg py-1 px-4 text-lg outline-none' />

                        <button onClick={searchHandler} className='text-white opacity-0-8 text-xl bg-orange-500 p-3 rounded-full active:bg-orange-700'><FiSearch />
                        </button>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-4xl text-white mt-4'>What are your favorite cuisines?</h2>
                        <p className='text-xl text-white mt-4'>PERSONALIZE YOUR EXPERIENCE</p>
                    </div>
                </div>


                <div className='w-full p-6'>
                    {searchData.length > 0 ? (
                        <div className='mb-10'>
                            <h1 className='text-3xl mb-2 font-semibold'>MEALS</h1>
                            <p className='bg-orange-500 h-1 w-14 rounded-md'></p>
                        </div>
                    ) : null}
                    <ul className='w-full flex justify-start items-center flex-wrap gap-x-6 gap-y-4'>
                        {searchData.map((item) => (
                            <li key={item.idMeal} className='list-none w-56 h-80 shadow-xl rounded-md relative'>
                                <NavLink to={`/product/${item.idMeal}`}>
                                    <img src={item.strMealThumb} alt={item.strMeal} width={'100%'} height={'230px'} className='rounded-t-md' />
                                    <p className='mt-2 px-2 flex justify-start items-center text-md'>{item.strArea}</p>
                                    <h2 className='px-2 mt-2 flex justify-start items-center text-lg font-semibold'>{item.strMeal}</h2>
                                    <p className='absolute flex justify-center items-center top-2 right-2 bg-orange-500 rounded-md text-white py-px px-2' >{item.strCategory}</p>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
