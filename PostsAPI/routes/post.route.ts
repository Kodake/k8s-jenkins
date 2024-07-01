import { Router } from 'express';
import {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
} from '../controllers/post.controller';

const router: Router = Router();

// api/posts
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/', getPosts);
router.get('/:id', getPostById);

export default router;
