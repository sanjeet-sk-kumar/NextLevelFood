import React from "react";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    return {
      title: "Not Found",
      description: "This meal does not exist.",
    };
  }
  return {
    title: meal.title,
    description: meal.summary,
    openGraph: {
      images: [{ url:  `https://sanjeetkumar-nextjs-demo-users-image.s3.us-west-2.amazonaws.com/${meal.image}`, width: 1200, height: 630 }],
    },
    // image: `https://sanjeetkumar-nextjs-demo-users-image.s3.us-west-2.amazonaws.com/${meal.image}`,
  };
};

const MealDetailsPage = ({ params }) => {
  console.log(params);
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://sanjeetkumar-nextjs-demo-users-image.s3.us-west-2.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main className={classes.instructions}>
        <h2>Instructions</h2>
        <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
