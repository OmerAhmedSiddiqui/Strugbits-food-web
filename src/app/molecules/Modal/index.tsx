"use client";

import SubHeading from "@/app/atoms/Subheading/page";
import { addRecipesToWeek } from "@/app/lib/redux/recipe/recipeSlice";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Modal({ modalState, setOpen, tabs, ids }: any) {
  const [activeWeek, setActiveWeek] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const weekRecipes = useSelector((state: any) => state.recipes);

  const addToWeek = (week: number, ids: Array<number>) => {
    const existingRecipes = weekRecipes[`week${week}`] || [];

    const alreadyExists = ids.some((id) => existingRecipes.includes(id));

    if (alreadyExists) {
      setErrorMessage("Food already exists in the selected week!");
      return;
    }

    dispatch(addRecipesToWeek({ week, recipeIds: ids }));
    setErrorMessage("");
    setOpen(false); 
  };

  return (
    <Dialog open={modalState} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden p-10 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:max-w-[35%] sm:max-w-[80%]"
          >
            <SubHeading heading="Select Week" classes="text-center mb-10" />

            <div className="flex justify-around">
              {tabs.map((item: any, key: number) => {
                return (
                  key !== 0 && (
                    <div
                      key={key}
                      onClick={() => setActiveWeek(key)}
                      className={`cursor-pointer px-5 py-2 rounded ${
                        activeWeek === key ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <SubHeading heading={item} classes="text-xl font-medium" />
                    </div>
                  )
                );
              })}
            </div>

            {errorMessage && (
              <p className="text-red-500 text-center mt-4">{errorMessage}</p>
            )}

            <button
              className="text-center rounded bg-[#004370] px-14 block m-auto mt-10"
              onClick={() => addToWeek(activeWeek, ids)}
            >
              <SubHeading heading="Save" classes="text-lg text-center py-2 text-white" />
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
