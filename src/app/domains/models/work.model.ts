import { Tech } from './tech.model';

export interface Work {
  id: string,
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  image: string;
  year: number;
  // techs: string[];
  techs: Tech[];
  techs2nd?: Tech[];
  frontend: boolean;
  backend: boolean;
  githubUrl?: string;
  youtubeLink?: string;
}
