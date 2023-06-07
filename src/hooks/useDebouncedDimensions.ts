import debounce from 'lodash.debounce'
import { useRef, useState, useMemo, useEffect } from 'react'

import {
  OnResize,
  ResizeDimensions,
  UseDebouncedResize,
} from '../types/hooks/useDebouncedResize'
import { Dimensions } from '../types/visualization/Dimensions'
import { getElementFromRef } from '../utils/guards/getElementFromRef'
import { getFirstArrayEntryOrBreak } from '../utils/guards/getFirstArrayEntryOrBreak'

export const useDebouncedDimensions: UseDebouncedResize = (
  delay = defaultDelay
) => {
  const ref = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState<Dimensions>(defaultDimensions)

  const onResize: OnResize = resizeObserverEntries => {
    resizeDimensions({ resizeObserverEntries, setDimensions })
  }
  const debounced = useMemo(
    () => debounce(onResize, delay, { leading: true }),
    [delay]
  )

  useEffect(() => {
    const element = getElementFromRef(ref)
    const resizeObserver = new ResizeObserver(debounced)
    resizeObserver.observe(element)

    return () => resizeObserver.unobserve(element)
  }, [debounced])

  return { ref, dimensions }
}

const defaultDelay = 500
export const defaultDimensions: Dimensions = { height: 0, width: 0 }

export const resizeDimensions: ResizeDimensions = ({
  resizeObserverEntries,
  setDimensions,
}) => {
  const frame = getFirstResizeObserverEntryFrame(resizeObserverEntries)

  setDimensions(prev => {
    if (!Object.is(prev, frame)) {
      return frame
    }
    return prev
  })
}

const getDimensionsFromResizeObserverEntry = (
  entry: ResizeObserverEntry
): Dimensions => {
  const { contentRect } = entry
  const height = Math.round(contentRect.height)
  const width = Math.round(contentRect.width)
  return { height, width }
}

const getFirstResizeObserverEntryFrame = (
  resizeObserverEntries: ResizeObserverEntry[]
): Dimensions => {
  const entry = getFirstArrayEntryOrBreak({
    array: resizeObserverEntries,
    errorMessage: 'Could not access first entry of resizeObserverEntries.',
  })
  const frame = getDimensionsFromResizeObserverEntry(entry)
  return frame
}
