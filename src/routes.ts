import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
import { favoritesController } from "./controllers/favoritesController";
import {
  likesController,
  likesController,
} from "./controllers/likesController";

const router = express.Router();

// register
router.post("/auth/register", authController.register);
// login
router.post("/auth/login", authController.login);

// Categories
router.get("/categories", ensureAuth, categoriesController.index);
router.get("/categories/:id", ensureAuth, categoriesController.show);

// Courses
router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/popular", coursesController.popular);
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

// Episodes
router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream);

// Favorites
router.get("/favorites", ensureAuth, favoritesController.index);
router.post("/favorites", ensureAuth, favoritesController.save);
router.delete("/favorites/:id", ensureAuth, favoritesController.delete);

// Likes
router.post("/likes", ensureAuth, likesController.save);
router.delete("/likes", ensureAuth, likesController.delete);

export { router };
