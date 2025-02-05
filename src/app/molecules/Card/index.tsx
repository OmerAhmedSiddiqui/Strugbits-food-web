import Para from "@/app/atoms/para/page";
import SubHeading from "@/app/atoms/Subheading/page";
import { removeRecipeFromWeek } from "@/app/lib/redux/recipe/recipeSlice";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Cards = ({item , setIds , inweek ,week} : any) => {
  const [active , setActive] = useState(false)
  const dispatch = useDispatch();

  const removeRecipe = (week: number, recipeId: number) => {
    dispatch(removeRecipeFromWeek({ week, recipeId }));
  };


  return (
    <div className={`md:max-w-sm max-w-full mb-5 bg-white border p-5 rounded-2xl shadow-lg overflow-hidden m-auto ${active ? "border-[#004370]"  : 'border-gray-300 '}`} onClick={()=>{
      setActive(!active)
      if(!active){
        setIds(item.id)
      }
    }}>
      <div className="relative">
        <Image
          src={item.image}
          alt="Classic Margherita Pizza"
          width={500}
          height={300}
          className="w-full h-56 object-cover rounded-lg"
        />
        <span className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-md" onClick={()=>inweek ? removeRecipe(week, item.id) :  console.log("else")}>
           {inweek ? 'x' : item.mealType[0]}
        </span>
      </div>

      <div className="py-5 px-2">
        <SubHeading
          heading={item.name}
          classes="text-lg font-extrabold"
        />
        <Para
          para=" Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. 
          Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. 
       "
          classes="text-gray-600 text-sm mt-2"
        />

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-bold">
            Cuisine: <span className="text-gray-700">{item.tags.length != 1 ? item.tags[0] : item.tags[0] + '...'}</span>
          </span>
          <div className="flex items-center">
            <span className="text-sm font-bold">Rating: {item.rating}</span>
            <div className="flex ml-2 text-yellow-400">★ ★ ★ ★ ★</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
