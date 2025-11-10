import { create } from 'zustand';
import type { PostGet } from '@repo/types/models/post';

export type PostsValue = PostGet[] | null | undefined;

interface PostState {
  posts: PostsValue;
  deleted: PostGet[];
  setPosts: (data: PostsValue) => void;
  clearPosts: () => void;
  addPost: (data: PostGet) => void;
  updatePost: (data: PostGet) => void;
  deletePost: (data: PostGet) => void;
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
