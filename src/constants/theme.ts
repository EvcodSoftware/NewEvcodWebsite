export const colors = {
  primary: {
    black: '#000000',
    darkGray: '#1A1A1A',
  },
  gradients: {
    blue: ['#60A5FA', '#8B5CF6'],
    purple: ['#8B5CF6', '#6366F1'],
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#9CA3AF',
  }
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
};

export const spacing = {
  section: {
    py: 'py-24',
    px: 'px-4'
  },
  container: 'container mx-auto'
};

export const borderRadius = {
  card: 'rounded-xl',
  button: 'rounded-full'
};

export const glassMorphism = {
  background: 'backdrop-blur-lg bg-black/50',
  border: 'border border-gray-800'
};
