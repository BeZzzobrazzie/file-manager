export type Node = {
  name: string;
  path: string;
  size: number;
  isDirectory: boolean;
};

export type FileNode = Node;

export type DirectoryNode = Node & {
  children: Node[];
};
