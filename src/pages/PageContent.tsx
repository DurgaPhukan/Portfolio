import { ReactElement } from "react";

function PageContent({
  title,
  children,
}: {
  title: string;
  children: ReactElement;
}) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
