import { useMemo } from 'react';

export const useAssetsMap = () => {
  return useMemo(() => {
    // Ładuje WSZYSTKIE obrazki z src/assets/ automatycznie!
    const modules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,svg}', { eager: true });
    
    return Object.fromEntries(
      Object.entries(modules).map(([path, mod]) => [
        path.replace('/src/assets/', 'assets/'),  // "assets/nazwa.jpg"
        mod.default as string
      ])
    );
  }, []);
};

// Użycie: const assetsMap = useAssetsMap(); <img src={assetsMap['assets/nagrody.jpg']} />
