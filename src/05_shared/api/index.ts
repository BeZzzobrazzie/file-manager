import FileManagerServiceInterface from "./types";

export class FileManagerService implements FileManagerServiceInterface {
  public list(directoryPath: string): Promise<any> {
    return new Promise((resolve) => {
      resolve({
        data: {
          nodes: listNodes(),
        },
      });
    });
  }
}
