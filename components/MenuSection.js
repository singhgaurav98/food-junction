import CategoryBadge from "./CategoryBadge";

export default function MenuSection({ category }) {
  return (
    <section id={category.id} className="scroll-mt-24 rounded-3xl bg-white/60 p-5 shadow-sm ring-1 ring-maroon/10 sm:p-7">
      <div className="mb-5 flex items-center gap-4">
        <CategoryBadge
          image={category.image}
          label={`${category.nameEn} / ${category.name} — Food Junction menu`}
        />
        <div>
          <h2 className="font-display text-2xl text-maroon sm:text-3xl">{category.name}</h2>
          <p className="text-xs uppercase tracking-widest text-clay">{category.nameEn}</p>
        </div>
      </div>
      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {category.items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-ink sm:text-base">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-maroon/30 translate-y-[-4px]" />
            <span className="font-display text-lg text-clay">₹{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
