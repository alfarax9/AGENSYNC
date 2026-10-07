import site from "@/content/site.json";

type FooterColumnProps = {
  title: string;
  links: { label: string; link: string }[];
};

type LinkKey = keyof typeof site.links;

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-text">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((item) => (
          <li key={item.label}>
            <a href={site.links[item.link as LinkKey]} className="hover:text-text">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
