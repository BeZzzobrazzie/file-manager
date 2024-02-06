import { Card } from "@mantine/core";
import { useMemo } from "react";
import { Node } from "src/05_shared/types";
import SidebarNode from "./sidebar-node";


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
      {rootChildren?.map(child => (
        <SidebarNode key={child.path} node={child} />
      ))}
    </Card>
  );
}
