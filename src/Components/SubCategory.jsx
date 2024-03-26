import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

export const SubCategory = () => {


    const params = useParams()

    const [subcategory, setSubCategory] = useState([]);

    const FetchData = async () => {

        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.subcategoryName}`);
            // console.log(response.data.meals);
            setSubCategory(response.data.meals);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <div className='w-full p-6'>

            <div className='mb-10'>
                <h1 className='text-3xl mb-2 font-semibold'>MEALS</h1>
                <p className='bg-orange-500 h-1 w-14 rounded-md'></p>
            </div>

            <ul className='w-full min-h-screen flex justify-start items-center flex-wrap gap-x-6 gap-y-4'>
                {subcategory && subcategory.map((item) => {
                    return (
                        <li key={item.idMeal} className='list-none w-56 h-72 shadow-xl rounded-md'>

                            <NavLink to={`/product/${item.idMeal}`}>

                                <img src={item.strMealThumb} alt={item.strMeal} width={'100%'} height={'230px'} className='rounded-t-md' />

                                <h2 className='p-2 flex justify-start items-center text-lg font-semibold'>{item.strMeal}</h2>

                            </NavLink>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
