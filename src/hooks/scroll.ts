import { useWindowScroll } from '@mantine/hooks';

export const useScrollProgress = () => {
  const [scroll, scrollTo] = useWindowScroll();

  if (typeof document === 'undefined') {
    return { scroll: { x: 0, y: 0 }, scrollTo: () => {} };
  }

  const totalHeight = document.documentElement.scrollHeight;
  const totalScrollableHeight = totalHeight - window.innerHeight;
  const progress = (scroll.y / totalScrollableHeight) * 100;

  return { scroll, scrollTo, progress };
};
