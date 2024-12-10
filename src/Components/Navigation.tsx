/**Navigation */

import React from "react";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rowContainer">
      {children}
      {React.Children.count(children) >= 7 && (
        <div className="shortBlock elseBtn">еще</div>
      )}
    </div>
  );
}
