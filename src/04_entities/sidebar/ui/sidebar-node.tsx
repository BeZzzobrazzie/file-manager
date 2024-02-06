import { Node } from "src/05_shared/types";

export type SidebarNodeProps = {
  node: Node;
};

export default function SidebarNode({ node }: SidebarNodeProps) {
  return (
    <>
      <div>{node.name}</div>
    </>
  );
}