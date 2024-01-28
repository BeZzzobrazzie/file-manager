import fileManagerService from "src/05_shared/api";
import { Node } from "src/05_shared/types";

export default class BaseFileManager {

  protected rootPath = "/";

  protected currentDirectoryPath = "/";

  protected currentDirectoryNode?: Node;

  public setRootPath(rootPath: string): BaseFileManager {
    this.rootPath = rootPath;
    return this;
  }

  public load(path: string): Promise<Node> {
    return new Promise((resolve, reject) => {
      fileManagerService
        .list(path)
        .then(responce => {
          this.currentDirectoryPath = path;
          this.currentDirectoryNode = responce.data.node;
          resolve(this.currentDirectoryNode as Node);
        })
        .catch(reject);
    });
  }
}