import { DataPoint } from '../visualization/DataPoint'

export type UseInitialProps = DataPoint[]
export type UseInitialReturn = {
  data: DataPoint[]
  isInitial: boolean
  opacity: number
}

export type UseInitial = (props: UseInitialProps) => UseInitialReturn
