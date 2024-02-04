import { Card } from "@mantine/core";
import { useMemo } from "react";

export type SidebarProps = {
  rootDirectory?: Node;
};

export function Sidebar({rootDirectory}: SidebarProps) {
  const rootChildren = useMemo(() => {
    return rootDirectory?.children?.filter(child => child.isDirectory);
  }, [rootDirectory]);

  if (!rootDirectory) return null;

  return (
    <Card shadow="sm">
      <div>Sidebar</div>
    </Card>
  );
}
