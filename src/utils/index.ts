import { Parser } from "html-to-react";

export const htmlToReact = (htmlStr: string) => {
  const htmlToReactParser = new (Parser as any)();
  return htmlToReactParser.parse(htmlStr);
};
