/** Fresh news with navigation and a short introduction.
 * Complete block of news with two components  */

import LinkNews from "./LinksNews";
import NewsNavigation from "./Newsnavigation";

type NewsProps = {
  items: {
    icon?: React.ReactNode;
    text: string;
    link?: string;
  }[];
};

export default function News({ items }: NewsProps) {
  return (
    <div className="columnContainer">
      <NewsNavigation time={"сегодняшняя дата"}>
        <div className="shortBlock link">первая вкладка</div>
        <div className="shortBlock link">вторая вкладка</div>
        <div className="shortBlock link">третья вкладка</div>
      </NewsNavigation>
      {items.map((item, index) => (
        <LinkNews key={index}>
          {item.icon && <div className="shortBlock">{item.icon}</div>}
          <div className="shortBlock">
            {item.link ? <a href={item.link}>{item.text}</a> : item.text}
          </div>
        </LinkNews>
      ))}
    </div>
  );
}
