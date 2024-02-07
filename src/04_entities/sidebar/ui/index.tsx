import { Card } from "@mantine/core";
import { useMemo } from "react";
import { Node } from "src/05_shared/types";
import SidebarNode from "./sidebar-node";
import { IconFolder, IconHome2 } from "@tabler/icons-react";

export type SidebarProps = {
  rootDirectory?: Node;
};

export function Sidebar({ rootDirectory }: SidebarProps) {
  const rootChildren = useMemo(() => {
    return rootDirectory?.children?.filter((child) => child.isDirectory);
  }, [rootDirectory]);

  if (!rootDirectory) return null;

  return (
    <Card shadow="sm">
      <SidebarNode
        node={rootDirectory}
        icon={<IconHome2 size={16} color="#78a136" />}
        navProps={{
          p: 0,
          pl: 5,
        }}
      />
      {rootChildren?.map((child) => (
        <SidebarNode
          key={child.path}
          node={child}
          icon={<IconFolder size={16} fill="#31caf9" />}
          navProps={{
            p: 0,
            pl: 15,
          }}
        />
      ))}
    </Card>
  );
}
