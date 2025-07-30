import { Box, Typography } from '@mui/material'
import { useRef, useState, useEffect } from 'react'
import styles from './featured-slider.module.css'
import { ChevronRightIcon } from '@/icons/chevron-right-icon'

interface FeaturedSliderProps<T> {
  title: string;
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  getItemKey?: (item: T, index: number) => string | number;
  scrollAmount?: number;
}

const FeaturedSlider = <T,>({
  title,
  items,
  renderCard,
  getItemKey = (_, index) => index,
  scrollAmount = 320
}: FeaturedSliderProps<T>) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftButton(scrollLeft > 0)
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      checkScrollButtons()

      carousel.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)

      return () => {
        carousel.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [])

  const scrollLeftButton = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollRightButton = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '0 50px',
        '@media (max-width: 768px)': {
          padding: '0.75rem 1.5rem',
          gap: '0.5rem',
        }
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <Box className={`${styles.carouselContainer} ${showLeftButton ? styles.showLeftGradient : ''} ${showRightButton ? styles.showRightGradient : ''}`}>
        {showLeftButton && (
          <button className={`${styles.navButton} ${styles.leftButton}`} onClick={scrollLeftButton}>
            <ChevronRightIcon />
          </button>
        )}

        <div
          className={styles.carousel}
          ref={carouselRef}
        >
          {items.map((item, index) => (
            <div key={getItemKey(item, index)} >
              {renderCard(item, index)}
            </div>
          ))}
        </div>

        {showRightButton && (
          <button className={`${styles.navButton} ${styles.rightButton}`} onClick={scrollRightButton}>
            <ChevronRightIcon />
          </button>
        )}
      </Box>
    </Box>
  )
}

export default FeaturedSlider