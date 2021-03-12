import React, { FC, useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Globe, PageWrap } from '@/components/UI'

const colors = ['#ff0055', '#0099ff', '#22cc88', '#ffaa00']

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

const about: FC = () => {
  const [selected, setSelected] = useState(colors[0])

  return (
    <PageWrap title={'About'}>
      <div className="pt-96">
        <AnimateSharedLayout type="crossfade">
          <ul>
            {colors.map((color) => (
              <Item
                key={color}
                color={color}
                isSelected={selected === color}
                onClick={() => setSelected(color)}
              />
            ))}
          </ul>
        </AnimateSharedLayout>
      </div>
    </PageWrap>
  )
}
function Item({ color, isSelected, onClick }) {
  return (
    <li
      className="w-20 h-20 rounded-full relative flex-shrink-0 cursor-pointer"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="absolute -top-5 -bottom-5 -right-5 -left-5 border-4 border-solid rounded-full"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  )
}
export default about
