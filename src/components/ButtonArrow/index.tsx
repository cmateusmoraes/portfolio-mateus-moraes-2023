import { memo } from 'react'
import Image from 'next/image'
import styles from './button-arrow.module.scss'

export const ButtonArrow = memo(function ButtonArrow() {
  return (
    <div className={styles.buttonArrow} role="presentation">
      <Image
        src="/image/arrow-white.svg"
        alt="Seguir"
        width={20}
        height={20}
        priority={false}
      />
    </div>
  )
})
