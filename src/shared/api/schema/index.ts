import type { components, paths } from './generated';

export type ApiPaths = paths;
export type ApiSchemas = components['schemas'];

export type R = ApiSchemas['CreateBoard'];
