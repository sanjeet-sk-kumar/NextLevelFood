import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";

const s3=new S3({
  region: 'us-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})

const db = sql("meals.db");
export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //   throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (id) => {
  console.log("id", id);
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(id);
};

const saveImage = async (image, slug) => {
  const extension = image.name.split(".").pop();
  const filename = `${slug}.${extension}`;
  // const path = `public/images/${filename}`;
  // const stream = fs.createWriteStream(path);
  const imgArrayBuffer = await image.arrayBuffer();
  const imgBuffer = Buffer.from(imgArrayBuffer);
  // stream.write(imgBuffer, (err) => {
  //   console.log("err", err);
  //   if (err) throw new Error("Failed to save image");
  //   stream.end();
  // });
  s3.putObject({
    Bucket: 'sanjeetkumar-nextjs-demo-users-image',
    Key: filename,
    Body: imgBuffer,
    ContentType: image.type,
  });
  return filename;
};
export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true, trim: true });
  meal.instructions = xss(meal.instructions);
  const fileName = await saveImage(meal.image, meal.slug);
  
  meal.image = fileName;
  const stmt = db.prepare(
    "INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)"
  );
  stmt.run(meal);
};
