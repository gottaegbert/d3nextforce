import { useState } from 'react'

import { UseInitial } from '../types/hooks/useInitial'
import { DataPoint } from '../types/visualization/DataPoint'

export const useInitial: UseInitial = dataOriginal => {
  const [isInitial, setIsInitial] = useState(true)

  const opacity = isInitial ? opacityInitial : opacityOriginal

  const dataInitial: DataPoint[] = dataOriginal.map(([x]) => [x, yValueInitial])
  const data = isInitial ? dataInitial : dataOriginal

  setTimeout(() => {
    setIsInitial(false)
  }, delayInitial)

  return { data, opacity, isInitial }
}
const delayInitial = 500
const opacityInitial = 0
const opacityOriginal = 1
const yValueInitial = 0
