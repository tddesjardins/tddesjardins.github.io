import Image from "next/image";
import type { PortfolioItem } from "./content";
import { Arrow } from "./icon";

export function PortfolioCard({
  item,
  dark = false,
}: {
  item: PortfolioItem;
  dark?: boolean;
}) {
  const image = (
    <Image
      src={`/images/${item.image}.webp`}
      alt={item.alt}
      fill
      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
      className={item.contain ? "object-contain p-6" : "object-cover"}
    />
  );
  return (
    <article className={`portfolio-card ${dark ? "card-dark" : ""}`} data-reveal>
      {item.href ? (
        <a href={item.href} className="card-image" aria-label={`${item.title} — image and related information`}>
          {image}
          <span className="image-arrow"><Arrow className="-rotate-45" /></span>
        </a>
      ) : (
        <div className="card-image">{image}</div>
      )}
      <div className="card-content">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.title}</h3>
        <p className="card-description">{item.description}</p>
      </div>
    </article>
  );
}
