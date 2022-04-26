import type { NextPage } from 'next'
import { PrefectureChoice } from 'src/components/Layout/PrefectureChoice'
import { Title } from 'src/components/Layout/Title'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Title />
      <PrefectureChoice />

    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
