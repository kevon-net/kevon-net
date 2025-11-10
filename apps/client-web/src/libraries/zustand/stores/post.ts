import { create } from 'zustand';
import type { PostRelations } from '@repo/types/models/post';

export type PostsValue = PostRelations[] | null | undefined;

interface PostState {
  posts: PostsValue;
  deleted: PostRelations[];
  setPosts: (data: PostsValue) => void;
  clearPosts: () => void;
  addPost: (data: PostRelations) => void;
  updatePost: (data: PostRelations) => void;
  deletePost: (data: PostRelations) => void;
}

export const useStorePost = create<PostState>((set) => ({
  posts: undefined,
  deleted: [],

  setPosts: (data) => {
    set({ posts: data });
  },

  clearPosts: () => {
    set({ posts: [] });
  },

  addPost: (data) => {
    set((state) => ({
      posts: [...(state.posts ?? []), data],
    }));
  },

  updatePost: (data) => {
    set((state) => ({
      posts:
        state.posts?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  deletePost: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      posts: state.posts?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
