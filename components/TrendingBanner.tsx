import React from 'react'
import { BannerCard } from './BannerCard'

export function TrendingBanner() {
  return (
      <BannerCard
        animation="bouncy"
        size="$4"
        marginBottom="$2"
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
  )
}

export default TrendingBanner