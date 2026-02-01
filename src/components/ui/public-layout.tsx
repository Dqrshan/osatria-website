import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

/**
 * Props for the PublicHeader component
 */
export interface PublicHeaderProps {
    /**
     * Icon to display in the header badge
     */
    icon?: LucideIcon;
    
    /**
     * Label text for the header badge (e.g., "LEGAL", "FORM")
     */
    badgeLabel?: string;
    
    /**
     * Custom href for the back button (defaults to "/")
     */
    backHref?: string;
    
    /**
     * Custom content to display instead of default user info
     */
    rightContent?: ReactNode;
    
    /**
     * Additional className for customization
     */
    className?: string;
}

/**
 * Reusable sticky header for public-facing pages (forms, legal pages)
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Back to home button with hover animation
 * - Badge with icon and label
 * - Customizable right-side content
 * 
 * @example
 * ```tsx
 * <PublicHeader
 *   icon={Shield}
 *   badgeLabel="LEGAL"
 * />
 * ```
 */
export function PublicHeader({
    icon: Icon,
    badgeLabel,
    backHref = "/",
    rightContent,
    className = "",
}: PublicHeaderProps) {
    return (
        <header className={`sticky top-0 z-40 w-full bg-paper/80 backdrop-blur-md border-b-4 border-ink ${className}`}>
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href={backHref} className="flex items-center gap-2 group">
                    <ArrowLeft className="h-4 w-4 text-primary group-hover:-translate-x-1 transition-transform" />
                    <span className="font-black tracking-tighter text-xl">
                        OS<span className="text-primary">ATRIA</span>
                    </span>
                </Link>
                
                {rightContent ? (
                    rightContent
                ) : (
                    <div className="flex items-center gap-3">
                        {badgeLabel && (
                            <span className="text-xs font-mono text-surface-lighter hidden sm:inline">
                                {badgeLabel}
                            </span>
                        )}
                        {Icon && (
                            <div className="h-8 w-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                                <Icon className="h-4 w-4 text-primary" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}

/**
 * Props for the PublicHero component
 */
export interface PublicHeroProps {
    /**
     * Badge text (small label above title)
     */
    badge?: string;
    
    /**
     * Main title
     */
    title: string | ReactNode;
    
    /**
     * Description text below title
     */
    description?: string | ReactNode;
    
    /**
     * Footer text (e.g., "Last Updated: ...")
     */
    footer?: string;
    
    /**
     * Custom badge color (defaults to primary)
     */
    badgeColor?: "primary" | "accent";
    
    /**
     * Additional className for customization
     */
    className?: string;
}

/**
 * Reusable hero section for public-facing pages
 * 
 * Features:
 * - Animated background gradients
 * - Badge, title, description layout
 * - Motion animations
 * - Responsive sizing
 * 
 * @example
 * ```tsx
 * <PublicHero
 *   badge="Community Guidelines"
 *   title="Code of Conduct"
 *   description="Our commitment to fostering an open, welcoming environment."
 *   footer="Last Updated: February 1, 2026"
 *   badgeColor="accent"
 * />
 * ```
 */
export function PublicHero({
    badge,
    title,
    description,
    footer,
    badgeColor = "primary",
    className = "",
}: PublicHeroProps) {
    const badgeColorClass = badgeColor === "accent" ? "bg-accent" : "bg-primary";
    
    return (
        <section className={`bg-ink text-paper py-16 px-4 relative overflow-hidden ${className}`}>
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {badge && (
                        <div className={`inline-block px-3 py-1 ${badgeColorClass} text-[10px] font-black tracking-[0.2em] uppercase mb-4`}>
                            {badge}
                        </div>
                    )}
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-paper/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                    {footer && (
                        <p className="text-paper/50 mt-4 font-mono text-sm">
                            {footer}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

/**
 * Props for the PublicFooter component
 */
export interface PublicFooterProps {
    /**
     * Optional contact email to display
     */
    contactEmail?: string;
    
    /**
     * Optional contact label text
     */
    contactLabel?: string;
    
    /**
     * Custom copyright text (defaults to "Atria Open Source Community")
     */
    copyrightText?: string;
    
    /**
     * Max width class for content container
     */
    maxWidth?: "3xl" | "5xl" | "7xl";
    
    /**
     * Additional className for customization
     */
    className?: string;
}

/**
 * Reusable footer for public-facing pages
 * 
 * Features:
 * - Consistent styling with top border
 * - Optional contact email
 * - Copyright text with current year
 * - Configurable max-width
 * 
 * @example
 * ```tsx
 * <PublicFooter
 *   contactEmail="opensource@atria.edu"
 *   contactLabel="Need help? Reach out at"
 *   maxWidth="5xl"
 * />
 * ```
 */
export function PublicFooter({
    contactEmail,
    contactLabel = "Questions? Contact us at",
    copyrightText = "Atria Open Source Community. All rights reserved.",
    maxWidth = "5xl",
    className = "",
}: PublicFooterProps) {
    const maxWidthClass = `max-w-${maxWidth}`;
    
    return (
        <footer className={`py-6 border-t-4 border-ink bg-surface/5 ${className}`}>
            <div className={`${maxWidthClass} mx-auto px-4 text-center`}>
                {contactEmail && (
                    <p className="text-surface-lighter text-xs mb-2">
                        {contactLabel}{" "}
                        <a
                            href={`mailto:${contactEmail}`}
                            className="text-primary hover:underline font-medium"
                        >
                            {contactEmail}
                        </a>
                    </p>
                )}
                <p className="text-surface-lighter text-[10px]">
                    © {new Date().getFullYear()} {copyrightText}
                </p>
            </div>
        </footer>
    );
}

/**
 * Props for the PublicPageLayout component
 */
export interface PublicPageLayoutProps {
    /**
     * Header configuration
     */
    header?: PublicHeaderProps;
    
    /**
     * Hero section configuration
     */
    hero?: PublicHeroProps;
    
    /**
     * Footer configuration
     */
    footer?: PublicFooterProps;
    
    /**
     * Main content
     */
    children: ReactNode;
    
    /**
     * Content max width
     */
    contentMaxWidth?: "3xl" | "5xl" | "7xl";
    
    /**
     * Whether to animate content with motion
     */
    animateContent?: boolean;
    
    /**
     * Additional className for main content
     */
    contentClassName?: string;
}

/**
 * Complete layout wrapper for public-facing pages
 * 
 * Combines PublicHeader, PublicHero, content area, and PublicFooter
 * into a single convenient component.
 * 
 * @example
 * ```tsx
 * <PublicPageLayout
 *   header={{ icon: Shield, badgeLabel: "LEGAL" }}
 *   hero={{
 *     badge: "Community Guidelines",
 *     title: "Code of Conduct",
 *     description: "Our commitment to fostering an open environment."
 *   }}
 *   footer={{ contactEmail: "conduct@atria.edu" }}
 *   contentMaxWidth="5xl"
 * >
 *   <div className="prose prose-lg">
 *     // Your content here
 *   </div>
 * </PublicPageLayout>
 * ```
 */
export function PublicPageLayout({
    header,
    hero,
    footer,
    children,
    contentMaxWidth = "5xl",
    animateContent = true,
    contentClassName = "",
}: PublicPageLayoutProps) {
    const maxWidthClass = `max-w-${contentMaxWidth}`;
    
    const contentWrapper = animateContent ? (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            {children}
        </motion.div>
    ) : (
        children
    );
    
    return (
        <div className="min-h-screen bg-paper flex flex-col">
            {header && <PublicHeader {...header} />}
            
            {hero && <PublicHero {...hero} />}
            
            <main className={`${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8 py-12 grow ${contentClassName}`}>
                {contentWrapper}
            </main>
            
            {footer !== undefined && <PublicFooter {...footer} />}
        </div>
    );
}
