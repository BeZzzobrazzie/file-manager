export type Node = {
  name: string;
  path: string;
  size: number;
  isDirectory: boolean;
  children?: Node[];

};

