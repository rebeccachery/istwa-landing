export function useScrollToRef(ref: React.RefObject<HTMLElement | null>) {
  const scrollTo = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return scrollTo;
}
