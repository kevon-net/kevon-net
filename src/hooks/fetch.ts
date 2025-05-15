import { useEffect, useMemo, useState } from 'react';
import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@/libraries/supabase/client';

export function useSupabaseQuery<T>(
  table: string,
  options?: {
    query?: (
      from: ReturnType<SupabaseClient['from']>
    ) => ReturnType<ReturnType<SupabaseClient['from']>['select']>;
    enabled?: boolean;
  }
) {
  const supabase = useMemo(() => createClient(), []);

  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  const enabled = options?.enabled ?? true;

  useEffect(() => {
    if (!enabled) return;

    const fetchData = async () => {
      setLoading(true);

      const query = supabase.from(table);

      const finalQuery = options?.query?.(query) ?? query.select();

      const { data, error } = await finalQuery;

      if (error) {
        setError(error);
      } else {
        setData(data as T[]);
      }

      setLoading(false);
    };

    fetchData();
  }, [options, supabase, table]);

  return { data, loading, error };
}
