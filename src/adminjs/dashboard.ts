import AdminJS, { PageHandler } from "adminJs";
import { Course, Episode, Category, User } from "../models";

export const dashbosrdOptions: { handler?: PageHandler; component?: string } = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, context) => {
    const courses = await Course.count();
    const episodes = await Episode.count();
    const categories = await Category.count();
    const standardUsers = await User.count({ where: { role: "user" } });

    res.json({
      Cursos: courses,
      Episódios: episodes,
      Categorias: categories,
      Usuários: standardUsers,
    });
  },
};