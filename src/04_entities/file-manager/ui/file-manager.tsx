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
  const [rootDirectoryNode, setRootDirectoryNode] = useState<Node>();

  const { current: fileManager } = useRef(new BaseFileManager());

  //console.log(currentDirectoryNode);

  const load = function (path: string, isRoot = false) {
    setIsLoading(true);
    fileManager
      .load(path)
      .then((node) => {
        setCurrentDirectoryNode(node);
        if (isRoot) setRootDirectoryNode(node);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!rootPath || !open) return;
    load(rootPath, true);
  }, [rootPath, open]); //rootPath, fileManager, open, load



  return (
    <>
      <Modal size="xl" opened={open} onClose={onClose}>
        <Toolbar />
        <div className={classes["body-wrapper"]}>
          <Grid>
            <Grid.Col span={3}>
              <Sidebar rootDirectory={rootDirectoryNode}/>
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
