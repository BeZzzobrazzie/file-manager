export type FileManagerProps = {
  open: boolean;
  rootPath?: string;
  onClose: () => void;
}

export type FileManagerEvents = "loading" | "load" | "directoryChange";