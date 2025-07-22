export interface Work {
  title: string;
  description: string;
  image: string;
  year: number;
  techs: string[];
  frontend: boolean;
  backend: boolean;
  githubUrl?: string;
  size: number;
}
