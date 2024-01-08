import { DirectoryNode } from "../../05_shared/types";

export default class FileManager {

  protected rootPath = "/";

  protected currentDirectoryPath = "/";

  protected currentDirectoryNode?: DirectoryNode;


}