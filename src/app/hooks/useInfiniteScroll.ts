import { useState, useCallback, useEffect } from 'react';

interface UseInfiniteScrollProps<T> {
  initialItems: T[];
  fetchMore: (page: number) => Promise<T[]>;
  itemsPerPage?: number;
}

export function useInfiniteScroll<T>({
  initialItems,
  fetchMore,
  itemsPerPage = 24,
}: UseInfiniteScrollProps<T>) {
  const [items, setItems] = useState<T[]>(initialItems);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const newItems = await fetchMore(page + 1);
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prevItems) => [...prevItems, ...newItems]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error loading more items:', error);
      setHasMore(false);
    }
    setLoading(false);
  }, [loading, hasMore, page, fetchMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreItems]);

  return {
    items,
    loading,
    hasMore,
    fetchMore,
  };
}
