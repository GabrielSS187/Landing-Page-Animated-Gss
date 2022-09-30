import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import { IContentBlockProps } from "./types";

const ContentBlock = (props: IContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;