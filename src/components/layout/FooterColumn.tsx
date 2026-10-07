import site from "@/content/site.json";
import { analyticsEvents } from "@/lib/analytics";

type FooterColumnProps = {
  title: string;
  links: { label: string; link: string }[];
};

type LinkKey = keyof typeof site.links;

const trackedLinks: Partial<Record<LinkKey, string>> = {
  github: analyticsEvents.githubClick,
  telegram: analyticsEvents.telegramClick,
};

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-text">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={site.links[item.link as LinkKey]}
              data-track-event={trackedLinks[item.link as LinkKey]}
              data-track-location="footer"
              className="hover:text-text"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
