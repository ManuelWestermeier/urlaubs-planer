import useAuth from "./use/auth.js";
import express from "express";
import getCreateAccount from "./get/auth/create-account.js";
import getLogin from "./get/auth/login.js";
import { bestJourneys, testData } from "./test-data.js";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next(null);
});

app.use(useAuth);

app.get("/auth/login", getLogin);

app.get("/auth/create-account", getCreateAccount);

app.get("/auth/create-account", (req, res) => {});

function searchTestData(query) {
  const lowerCaseQuery = query.toLowerCase(); // Convert query to lowercase for case-insensitive search

  return testData
    .filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.price.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery)
      );
    })
    .map((item) => ({
      title: item.title,
      price: item.price,
      location: item.location,
    }));
}

app.get("/journey/:id", (req, res) => {
  res.json(testData[req.params.id]);
});

app.get("/search-journeys", (req, res) => {
  const search = req.query?.search;

  if (!search || search.length === 0) return res.json([]);

  const lowerCaseQuery = search.toLowerCase(); // Convert query to lowercase for case-insensitive search
  const out = [];

  for (const key of Object.keys(testData)) {
    const item = testData[key];
    if (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.price.toLowerCase().includes(lowerCaseQuery) ||
      item.location.toLowerCase().includes(lowerCaseQuery)
    ) {
      out.push({
        id: key, // Use `key` as the id
        title: item.title,
        price: item.price,
        location: item.location,
        coverImage:
          item.images[0]?.src ?? "https://via.placeholder.com/300x200", // Access `src` of the first image
      });
    }
  }

  return res.json(out);
});

app.get("/best-journeys", (req, res) => {
  res.json(
    bestJourneys.map((key) => {
      const item = testData[key];
      return {
        id: key, // Use `key` as the id
        title: item.title,
        price: item.price,
        location: item.location,
        coverImage:
          item.images[0]?.src ?? "https://via.placeholder.com/300x200", // Access `src` of the first image
      };
    })
  );
});

app.listen(8080);

// process.on("uncaughtException", (err) => console.log(err));
