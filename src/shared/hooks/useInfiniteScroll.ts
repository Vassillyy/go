import { useEffect, useRef } from 'react';

interface IUseInfiniteScrollProps {
  hasMore: boolean;
  onLoadMore: () => void;
  threshold?: number;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  hasMore,
  onLoadMore,
  threshold = 0.1,
  rootMargin = '100px',
}: IUseInfiniteScrollProps) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [hasMore, onLoadMore, threshold, rootMargin]);

  return sentinelRef;
};
