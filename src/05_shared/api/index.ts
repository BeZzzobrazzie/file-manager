import { newNode } from "../lib/data";
import FileManagerServiceInterface from "./types";

export class FileManagerService implements FileManagerServiceInterface {
  public list(directoryPath: string): Promise<any> {
    return new Promise((resolve) => {
      resolve({
        data: {
          nodes: newNode(),
        },
      });
    });
  }

  public createDirectory(directoryName: string, saveTo: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public delete(paths: string[]): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public rename(path: string, newPath: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public copy(paths: string[], destination: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public move(paths: string[], destination: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  public upload(files: File[], directoryPath: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

const fileManagerService = new FileManagerService();
export default fileManagerService;