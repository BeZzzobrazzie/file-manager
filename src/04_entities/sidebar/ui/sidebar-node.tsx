import { IconFolder } from "@tabler/icons-react";
import { Node } from "src/05_shared/types";
import classes from "./classes.module.css";
import useFileManager from "src/05_shared/lib/hooks/useFileManager";
import { useEffect, useState } from "react";
import { NavLink, NavLinkProps } from "@mantine/core";

export type SidebarNodeProps = {
  node: Node;
  icon?: React.ReactNode;
  navProps?: Partial<NavLinkProps>;
};

export default function SidebarNode({ icon, node, navProps={}, }: SidebarNodeProps) {
  const fileManager = useFileManager();
  const [isActiveNode, setIsActiveNode] = useState(
    node === fileManager.currentDirectoryNode
  );

  useEffect(() => {
    setIsActiveNode(node === fileManager.currentDirectoryNode);
  }, [fileManager.currentDirectoryNode, node]);

  return (
    <NavLink
      {...navProps}
      active={isActiveNode}
      onClick={() => fileManager.load(node.path)}
      label={
        <>
          <span className={classes["icon-wrapper"]}>{icon}</span>
          <span>{node.name}</span>
        </>
      }
    />
  );
}

SidebarNode.defaultProps = {
  icon: <IconFolder fill="#31caf9" />,
};
