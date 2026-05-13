type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="bg-resilium-offWhite py-20">
      <div className="section-shell">
        <h2 className="text-3xl font-bold text-resilium-charcoal md:text-4xl">FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.question} className="light-card rounded-lg p-6">
              <h3 className="text-lg font-bold text-resilium-charcoal">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-resilium-charcoal">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
