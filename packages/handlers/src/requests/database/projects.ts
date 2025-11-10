/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import { API_URL } from '@repo/constants/paths';
import { HEADERS } from '@repo/constants/other';
import { ProjectCreate, ProjectUpdate } from '@repo/types/models/project';

const baseRequestUrl = `${API_URL}/projects`;

export const projectsGet = async () => {
  try {
    const request = new Request(baseRequestUrl, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get projects):', error);
    throw error;
  }
};

export const projectGet = async (params: { projectId: string }) => {
  try {
    const request = new Request(`${baseRequestUrl}/${params.projectId}`, {
      method: 'GET',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> handler error - (get project):', error);
    throw error;
  }
};

export const projectCreate = async (project: ProjectCreate) => {
  try {
    const request = new Request(`${baseRequestUrl}/create`, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(project),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (create project):', error);
    throw error;
  }
};

export const projectUpdate = async (project: ProjectUpdate) => {
  try {
    const request = new Request(`${baseRequestUrl}/${project.id}`, {
      method: 'PUT',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(project),
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (update project):', error);
    throw error;
  }
};

export const projectDelete = async (projectId: string) => {
  try {
    const request = new Request(`${baseRequestUrl}/${projectId}`, {
      method: 'DELETE',
      headers: HEADERS.WITHOUT_BODY,
    });

    const response = await fetch(request);

    return response;
  } catch (error) {
    console.error('---> handler error - (delete project):', error);
    throw error;
  }
};
