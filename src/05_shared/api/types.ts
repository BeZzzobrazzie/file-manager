

export default interface FileManagerServiceInterface {

  list(directoryPath: string): Promise<any>;

  createDirectory(directoryPath: string, saveTo: string): Promise<any>;

  delete(paths: string[]): Promise<any>;
  rename(path: string, newPath: string): Promise<any>;
  copy(paths: string[], destination: string): Promise<any>;
  move(paths: string[], destination: string): Promise<any>;
  upload(files: File[], directoryPath: string): Promise<any>;
  
  
}