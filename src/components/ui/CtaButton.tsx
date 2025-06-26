"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type React from 'react';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CtaButton = ({ href, children, className, onClick }: CtaButtonProps) => {
  const params = useSearchParams();
  const query = Object.fromEntries(params.entries());
  return (
    <Link
      href={{
        pathname: href,
        query: query,
      }}
      className={cn(
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
