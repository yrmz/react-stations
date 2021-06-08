// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setdogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setdogUrl(data.message))
  }, [])

  return (
    <div>
      <header>React Stations</header>
      <div>犬の画像</div>
      <img src={dogUrl} />
    </div>
  )
}
