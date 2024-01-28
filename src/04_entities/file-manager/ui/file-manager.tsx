import { Grid, Modal } from "@mantine/core";
import { FileManagerProps } from "../lib/types";
import { Toolbar } from "src/04_entities/toolbar";
import { Sidebar } from "src/04_entities/sidebar";
import { Content } from "src/04_entities/content";
import classes from "./classes.module.css";
import { useEffect, useRef, useState } from "react";
import { Node } from "src/05_shared/types";
import BaseFileManager from "../lib/base-file-manager";

export function FileManager({ open, onClose, rootPath }: FileManagerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentDirectoryNode, setCurrentDirectoryNode] = useState<Node>();

  const {current: fileManager} = useRef(new BaseFileManager());

  console.log(currentDirectoryNode);

  useEffect(() => {
    if (!rootPath || !open) return;
    
    setIsLoading(true);

    fileManager.load(rootPath).then(directoryNode => {
      setIsLoading(false);
      setCurrentDirectoryNode(directoryNode);
    });
  }, [rootPath, fileManager, open]);


  return (
    <>
      <Modal size="xl" opened={open} onClose={onClose}>
        <Toolbar />
        <div className={classes["body-wrapper"]}>
          <Grid>
            <Grid.Col span={3}>
              <Sidebar />
            </Grid.Col>
            <Grid.Col span={9}>
              <Content />
            </Grid.Col>
          </Grid>
        </div>
      </Modal>
    </>
  );
}

FileManager.defaultProps = {
  rootPath: "/",
};