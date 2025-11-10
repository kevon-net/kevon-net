import { Prisma, Project } from '@repo/db/generated/prisma/client.js';

// Type for creating a item (without id and relations)
export type ProjectCreate = Prisma.ProjectCreateInput;

// Type for updating a item (all fields optional except id)
export type ProjectUpdate = Prisma.ProjectUpdateInput;

// Type for default item (with id and no relations)
export type ProjectGet = Project;

// Type for fetched item with relations
export type ProjectRelations = Prisma.ProjectGetPayload<{
  include: {
    // _count: { select: { Comments: true } };
    category: true;
  };
}>;
