export const listContainer = {
  initial: {
    y: -10,
  },
  visible: {
    y: 0,
    transition: { type: 'tween', delayChildren: 0.5, staggerChildren: 0.2 },
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
