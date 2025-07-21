import { Tech } from './tech.model';

export interface Work {
  id: string,
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  image: string;
  year: number;
  techs: Tech[];
  techs2nd: Tech[];
  frontend: boolean;
  backend: boolean;
  important_text?: string;
  github?: string;
  github_text?: string;
  github2nd?: string;
  github2nd_text?: string;
  web_text?: string;
  web?: string;
  webdev_text?: string;
  webdev?: string;
  youtube?: string;
  youtube_text?: string;
  youtube2nd?: string;
  youtube2nd_text?: string;
  extra_link?: string;
  extra_link_text?: string;
  extra_link2?: string;
  extra_link2_text?: string;
}
