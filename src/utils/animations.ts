export const listContainer = {
  initial: {
    y: -10,
  },
  visible: {
    y: 0,
    transition: { type: 'tween', delayChildren: 0.7, staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    y: '-10vh',
  },
}

export const listItem = {
  initial: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const prevAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
