import { Button } from "@mantine/core";
import { useState } from "react";
import { FileManager } from "src/04_entities/file-manager";
import { FileManagerService } from "src/05_shared/api";

const fileManager = new FileManagerService();

export function HomePage() {
  // fileManager.list("/").then((response) => {
  //   console.log(response.data);
  // });

  const [openFileManager, setOpenFileManager] = useState(false);

  return (
    <>
      <h1>Home page</h1>
      <Button onClick={() => setOpenFileManager(true)}>
        Open File Manager
      </Button>
      <FileManager
        open={openFileManager}
        onClose={() => setOpenFileManager(false)}
      />
    </>
  );
}
