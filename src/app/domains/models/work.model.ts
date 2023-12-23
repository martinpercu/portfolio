export interface Work {
  title: string;
  description: string;
  image: string;
  year: number;
  tech: string[];
  frontend: boolean;
  backend: boolean;
  githubUrl?: string;
}
