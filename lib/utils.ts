/**
 * Format a date string to human-readable format
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
}

/**
 * Generate metadata for SEO
 */
export function generateMetadata(
    title: string,
    description: string,
    keywords: string[] = []
) {
    return {
        title: `${title} | Kaadu Golla Community`,
        description,
        keywords: [...keywords, "Kaadu Golla", "Karnataka", "Community"],
    };
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Convert string to URL-friendly slug
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")
        .replace(/-+/g, "-");
}

/**
 * Compare two dates
 */
export function isDatesEqual(date1: Date, date2: Date): boolean {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}
