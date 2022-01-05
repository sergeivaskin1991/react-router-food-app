import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { getFilteredCategoriy } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";
import { useNavigate } from "react-router-dom";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = useNavigate();

  useEffect(() => {
    getFilteredCategoriy(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => goBack(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
