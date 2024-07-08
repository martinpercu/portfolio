export interface Work {
  id: string,
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  image: string;
  year: number;
  techs: string[];
  frontend: boolean;
  backend: boolean;
  githubUrl?: string;
  youtubeLink?: string;
}
