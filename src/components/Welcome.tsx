import { FC } from 'react'

import { Layout } from './Layout/Layout'
import { TestChart } from './Visualization/TestChart'

export const Welcome: FC = () => {
  return (
    <Layout>
      <h1>A Next.js + D3 Starter!</h1>
      <em>Integrates D3 and React following a D3 first approach:</em>
      <ul>
        <li>DOM is mostly handled by D3.</li>
        <li>Static properties are styled with CSS.</li>
        <li>Transitions are done by D3</li>
        <li>Resizes Charts based on the D3 margins convention.</li>
        <li>Partially tested with Jest and testing-library.</li>
      </ul>
      <div>
        <TestChart />
      </div>
    </Layout>
  )
}
