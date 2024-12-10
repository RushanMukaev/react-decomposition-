/**foot place with different offers to follow link */

export default function Offers({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="columnContainer offers">
      <div>{title}</div>
      {children}
    </div>
  );
}
