import site from "@/content/site.json";

type NavLinksProps = {
  className: string;
  linkClassName: string;
  onNavigate?: () => void;
};

export function NavLinks({ className, linkClassName, onNavigate }: NavLinksProps) {
  return (
    <nav aria-label={site.nav.label}>
      <ul className={className}>
        {site.nav.items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onNavigate} className={linkClassName}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
