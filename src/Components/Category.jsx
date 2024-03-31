import React, { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  const FetchData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const data = await response.json();
      // console.log(data.categories);
      setCategoryData(data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="w-full p-4">
      <div className="w-full mb-10">
        <h1 className="text-2xl font-semibold tracking-wide">CATEGORIES</h1>
        <p className="bg-orange-400 h-1 w-20 mt-2 rounded-sm"></p>
      </div>

      <div className="w-full mb-24">
        <ul className="w-full flex justify-start items-center flex-wrap gap-6 list-none">
          {categoryData &&
            categoryData.map((item) => {
              return (
                <li
                  key={item.idCategory}
                  className="w-56 h-1/5 shadow-xl flex justify-center relative rounded-md hover:bg-slate-600 ease-in-out duration-300"
                >
                  <NavLink to={`/subcategory/${item.strCategory}`}>
                    <p className="absolute right-2 top-2 bg-orange-600 text-white opacity-0.8 p-1 rounded-sm text-xs tracking-wide font-semibold z-10">
                      {item.strCategory.toUpperCase()}
                    </p>

                    <img
                      src={item.strCategoryThumb}
                      alt={item.strCategory}
                      width={"230px"}
                      height={"230px"}
                      className="p-4 hover:scale-75 ease-in-out duration-300 cursor-pointer"
                    />
                  </NavLink>

                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Category;
