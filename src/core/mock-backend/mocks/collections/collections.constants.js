import { createEmptyArray } from "@core/utils";

export const generateCollections = n => {
  return createEmptyArray(n)
    .map((element, index) => {
      return `collection ${index + 1}`; 
    });
};

export const generateDatabases = (n, m) => {
  return createEmptyArray(n)
    .map((element, index) => {
      return index + 1;
    })
    .map(element => {
      return {
        title: `database ${element}`, // TODO: use dynamic naming
        children: generateCollections(m)
      }
    });
};

export const COLLECTIONS_MOCK_DATA = generateDatabases(3, 5);
