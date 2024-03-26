import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Category } from "./Category";

export const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState({});
  const [tag, setTag] = useState([]);
  const [instruction, setInstruction] = useState([]);

  const fetchProductData = async () => {
    try {
      const response = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`
      );

      console.log(response.data.meals[0]);
      response.data.meals[0] ? setProduct(response.data.meals[0]) : setProduct([]);

      response.data.meals[0].strTags ? setTag(response.data.meals[0].strTags.split(",")) : setTag([]);

      response.data.meals[0].strInstructions ? setInstruction(response.data.meals[0].strInstructions.split(".")) : setInstruction([]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  console.log(instruction);
  return (
    <>
      <div className="w-full min-h-screen py-1 px-6 flex flex-col mb-24">


        <div className="w-full h-12 bg-orange-500 flex text-white justify-start items-center py-1 px-4 gap-4 mb-6">
          <span>
            <NavLink to="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
              </svg>
            </NavLink>
          </span>
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
              <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
            </svg>
          </span>
          <span>{product.strMeal?.toUpperCase()}</span>
        </div>



        <div>
          <h1 className="text-3xl font-semibold mb-2">MEALS DETAILS</h1>
          <p className="bg-orange-500 h-1 w-24"></p>
        </div>



        <div className="w-full bg-white min-h-screen mt-6 drop-shadow-2xl p-8 rounded-md">
          <div className="w-full flex justify-start gap-12">
            <img
              src={product.strMealThumb}
              alt={product.strIngredient1}
              height={"600px"}
              width={"500px"}
              className="w-1/2 rounded-md"
            />

            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-orange-500 mt-2 mb-2">
                {product.strMeal}
              </h2>
              <p className="h-px w-full bg-orange-500"></p>

              <p className="mt-3 text-lg">
                <span className="font-bold mr-3">CATEGORY :</span>
                <span className="opacity-0.8">
                  {product.strCategory?.toUpperCase()}
                </span>
              </p>

              <p className="mt-6 text-lg">
                {product.strSource && (

                  <a href={product.strSource} target="_blank">
                    <span className="font-bold mr-3">Source:</span>

                    <span className="hover:text-orange-600">
                      {product.strSource.length > 40 ? product.strSource.slice(0, 40) + "..." : product.strSource}
                    </span>
                  </a>
                )}
              </p>

              <p className="w-full mt-8 ">
                <span className="font-bold mr-3 ">TAGS:</span>
                {tag.map((e) => {
                  return (
                    <span className="h-6 w-12 tex-lg text-orange-700 border mr-3 py-1 px-4 border-orange-300">{e}</span>);
                })}
              </p>

              <div className="w-full mt-8 bg-orange-600 py-3 px-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">Ingredients</h3>

                <ul className="w-full flex flex-wrap">
                  {Object.keys(product).filter((key) => key.startsWith("strIngredient") && product[key] !== "").map((ingredientKey, index) => (
                    <li
                      key={ingredientKey}
                      className="w-1/3 flex justify-start items-center gap-4 mb-4"
                    >
                      <span className="h-8 w-8 flex justify-center items-center rounded-full bg-slate-600 ">{index + 1}</span>
                      <span>{product[ingredientKey]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full mt-20">
            <h1 className="text-xl mb-2">Measure:</h1>

            <ul className="w-full flex flex-wrap border py-4 px-10">

              {Array.from({ length: 20 }, (_, index) => {
                const measure = product[`strMeasure${index + 1}`];
                // Add a conditional check to filter out invalid measures
                if (measure && measure.trim() !== "") {
                  return (
                    <li key={index} className="w-1/2 items-center">
                      <div className="w-full flex justify-center items-center gap-3 mb-4">

                        <svg className="scp text-orange-600" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path>
                        </svg>

                        <p className="w-full text-md font-semibold">{measure}</p>
                      </div>
                    </li>
                  );
                }
                return null; // This skips rendering if the measure is invalid or empty
              })}
            </ul>
          </div>

          <div className="w-full mt-8 mb-6">
            <h1 className="text-xl font-semibold">Instructions:</h1>

            {instruction.map(
              (item, index) =>

                item !== "" && (<ul key={index} className="w-full flex flex-col gap-5">
                  <li className="w-full flex gap-2 justify-start items-center mt-3">

                    <svg style={{ color: "#e16120" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-orange li-icon" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                    </svg>

                    <span className="text-lg">{item}</span>
                  </li>
                </ul>
                )
            )}
          </div>
        </div>
      </div>

      <Category />
    </>
  );
};
