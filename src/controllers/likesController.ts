import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { likeService } from "../services/LikeService";

export const likesController = {
  // POST /likes
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.body;

    try {
      const like = await likeService.create(userId, courseId);
      return res.status(201).json(like);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // DELETE /likes/:id

  delete: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.body;

    try {
      const like = await likeService.delete(userId, courseId);
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
