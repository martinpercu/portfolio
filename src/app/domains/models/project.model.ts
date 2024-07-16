import { Tech } from './tech.model';

export interface Project {
  title: string;
  description: string;
  image: string;
  year: number;
  techs: Tech[];
  techs2nd?: Tech[];
  frontend?: boolean;
  backend?: boolean;
  githubOk: boolean;
  githubUrl?: string;
  webOk: boolean;
  webUrl?: string;
}
