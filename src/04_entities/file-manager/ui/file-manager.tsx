import { Grid, Modal } from "@mantine/core";
import { FileManagerProps } from "../lib/types";
import { Toolbar } from "src/04_entities/toolbar";
import { Sidebar } from "src/04_entities/sidebar";
import { Content } from "src/04_entities/content";
import classes from "./classes.module.css";

export function FileManager({ open, onClose }: FileManagerProps) {
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
