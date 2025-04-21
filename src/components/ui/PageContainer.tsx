import { clsMerge } from '@/lib/utils'
import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  position?: 'sticky' | 'fixed' | 'relative' | 'absolute' | 'static'
  top?: string
  bottom?: string
  height?: string
  zIndex?: string
  background?: string
}

/**
 * A flexible container component for page elements like navbar and footer
 * Allows controlling position, background, z-index and other layout properties
 */
const PageContainer = ({
  children,
  position = 'sticky',
  top,
  bottom,
  height = 'h-16',
  zIndex = 'z-50',
  background = 'bg-white'
}: PageContainerProps) => {
  return (
    <div className={clsMerge('min-w-full', position, background, top, bottom, height, zIndex)}>
      <div
        className={clsMerge(
          'max-w-[1200px] min-w-[960px] relative flex items-center w-full px-6 h-full mx-auto'
        )}>
        {children}
      </div>
    </div>
  )
}

export default PageContainer
