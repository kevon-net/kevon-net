import { create } from 'zustand';
import type { ProjectGet } from '@repo/types/models/project';

export type ProjectsValue = ProjectGet[] | null | undefined;

interface ProjectState {
  projects: ProjectsValue;
  deleted: ProjectGet[];
  setProjects: (data: ProjectsValue) => void;
  setDeletedProjects: (data: ProjectsValue) => void;
  clearProjects: () => void;
  clearDeletedProjects: () => void;
  addProject: (data: ProjectGet) => void;
  updateProject: (data: ProjectGet) => void;
  deleteProject: (data: ProjectGet) => void;
}

export const useStoreProject = create<ProjectState>((set) => ({
  projects: undefined,
  deleted: [],

  setProjects: (data) => {
    set({ projects: data });
  },

  setDeletedProjects: (data) => {
    set({ deleted: data || [] });
  },

  clearProjects: () => {
    set({ projects: [] });
  },

  clearDeletedProjects: () => {
    set({ deleted: [] });
  },

  addProject: (data) => {
    set((state) => ({
      projects: [...(state.projects ?? []), data],
    }));
  },

  updateProject: (data) => {
    set((state) => ({
      projects:
        state.projects?.map((i) => (i.id === data.id ? { ...data } : i)) ??
        undefined,
    }));
  },

  deleteProject: (data) => {
    set((state) => ({
      deleted: [...state.deleted, data],
      projects: state.projects?.filter((i) => i.id !== data.id) ?? undefined,
    }));
  },
}));
