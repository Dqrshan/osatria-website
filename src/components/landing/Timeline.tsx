export const Timeline = () => {
    const events = [
        {
            date: "Feb 10, 2026",
            title: "Program kickoff 🚀",
            description: "Join us for the opening ceremony and get ready to contribute!"
        },
        {
            date: "Feb 15 - Mar 15, 2026",
            title: "Contribution Period 💻",
            description: "Work on issues, submit PRs, and earn points."
        },
        {
            date: "Mar 20, 2026",
            title: "Winners Announced 🏆",
            description: "Top contributors and projects will be awarded."
        }
    ];

    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto bg-surface text-ink">
            <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-b from-ink to-ink/70">
                Mission <span className="text-primary">Timeline</span>
            </h2>

            <div className="relative border-l-2 border-surface-lighter ml-6 space-y-12">
                {events.map((event, index) => (
                    <div key={index} className="relative pl-8 sm:pl-12 group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_var(--color-primary)]" />

                        {/* Event Card */}
                        <div className="bg-surface-light p-8 rounded-none border border-surface-lighter hover:border-primary hover:translate-x-2 transition-all duration-300 relative overflow-hidden group-hover:shadow-[4px_4px_0_0_var(--color-primary)]">
                            {/* Circuit decoration */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-surface-lighter opacity-50 group-hover:border-primary/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-surface-lighter opacity-50 group-hover:border-primary/50 transition-colors" />

                            <div className="text-xs font-mono font-bold text-primary mb-2 tracking-widest uppercase flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary animate-pulse" />
                                {event.date}
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-ink group-hover:text-primary transition-colors">{event.title}</h3>
                            <p className="text-ink/70 font-mono text-sm leading-relaxed max-w-prose">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
