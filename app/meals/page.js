import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community',
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite receipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share you favorite receipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h1 className={classes.loading}>Fetching Meals ...</h1>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
