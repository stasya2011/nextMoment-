import React from "react";

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div>PostLayout++</div>
      {children}
    </section>
  );
};

export default PostLayout;
