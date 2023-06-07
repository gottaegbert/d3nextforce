import * as NextHead from 'next/head'
import { FC } from 'react'

export const Head: FC = () => {
  return (
    <NextHead.default>
      <title>Next D3 Starter</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead.default>
  )
}
