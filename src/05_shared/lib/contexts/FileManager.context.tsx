import { createContext } from "react";
import BaseFileManager from "src/04_entities/file-manager/lib/base-file-manager";


const FileManagerContext = createContext<BaseFileManager | null>(null);

export default FileManagerContext;