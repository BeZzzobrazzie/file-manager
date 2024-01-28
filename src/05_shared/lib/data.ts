import { faker } from "@faker-js/faker";
import { Node } from "../types";

export function newNode(maxNested = 10): Node {
  const node: Node = {
    name: faker.system.fileName(),
    path: faker.system.filePath(),
    size: faker.number.int({ min: 1, max: 100000 }),
    isDirectory: faker.datatype.boolean(),
  };

  maxNested -= 1;
  if (node.isDirectory && maxNested > 0) {
    (node as Node).children = listNodes(3, maxNested);
  }

  return node;
}

export function listNodes(maxNodes = 10, maxNested = 10): Node[] {

  let arr = [];
  for (let i = 0; i < maxNodes; i++) {
    arr.push(i);
  }
  const result = arr.map(() => newNode(maxNested));
  return result;
}