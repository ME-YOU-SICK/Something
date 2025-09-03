"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GlowingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
}

export function GlowingCard({ 
  icon, 
  title, 
  description, 
  className,
  onClick,
  href,
  children
}: GlowingCardProps) {
  const CardContent = () => (
    <div className={cn("relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3", className)}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex flex-col justify-between gap-6 rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6 overflow-visible">
        <div className="relative flex flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
              {title}
            </h3>
            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
              {description}
            </h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left">
        <CardContent />
      </button>
    );
  }

  return <CardContent />;
}
