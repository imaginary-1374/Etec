import { NavLink, Link } from "react-router-dom";

import vr from "/4albnHYE88QncxbZbQd4TAJZ8sY.jpg";
import display from "/w8U0qeGPnEraHS19zHSqO4o34.jpg";
import laptop from "/0qM9Ztm4HZhZHt8vNXGofUBQf2w.jpg";
export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "The Future of Wearable Tech: Trends and Innovations to Watch",
      img: vr,
    },
    {
      id: 2,
      title: "The Rise of Smart Home Devices: Transforming the Way We Live",
      img: display,
    },
    {
      id: 3,
      title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
      img: laptop,
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex flex-col gap-2 items-start w-full px-4
                   md:flex-row md:justify-between"
      >
        <h2 className="first-letter:uppercase text-3xl font-medium mb-8">
          our articles and news
        </h2>
        <NavLink
          to="/articles"
          className="inline-block first-letter:uppercase border rounded-full py-3 px-8 cursor-pointer bg-white
             hover:bg-stone-800 hover:text-white transition-all duration-250 text-center"
        >
          check all
        </NavLink>
      </div>
      <div className="flex gap-4 justify-start px-4 py-4 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`} // هيروح لصفحة المقال بناءً على الـ ID
            className="flex flex-col gap-2 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] 
                 hover:blur-[.5px] hover:scale-[1.02] transition-all duration-250 shrink-0 cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-[360px]"
                src={article.img}
                alt={article.title}
              />
            </div>
            <h3 className="text-lg p-2 font-light">{article.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
