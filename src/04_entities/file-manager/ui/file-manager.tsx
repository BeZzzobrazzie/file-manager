import { Modal } from "@mantine/core";
import { FileManagerProps } from "../lib/types";

export function FileManager({ open, onClose }: FileManagerProps) {
  const openVar = open;

  return (
    <>
      <Modal size="xl" opened={open} onClose={onClose}>
        <div>File Manager</div>
      </Modal>
    </>
  )
}