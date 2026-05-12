type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeader({ eyebrow, title, description, action }: Props) {
  return (
    <div className="flex items-end justify-between gap-4 mb-4">
      <div>
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1">{eyebrow}</p>
        )}
        <h2 className="text-xl md:text-2xl font-display font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {action}
    </div>
  );
}
