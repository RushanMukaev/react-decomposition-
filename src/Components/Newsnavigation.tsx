/* news links navigation  */

export default function NewsNavigation({
  children,
  time,
}: {
  children: React.ReactNode;
  time?: string;
}) {
  return (
    <div className="rowContainer newsLinks">
      {children}
      <div className="shortBlock time">{time}</div>
    </div>
  );
}
