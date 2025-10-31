import React, { useState } from 'react'
import Faq from './Faq'
import History from './History'
import { useSelector } from 'react-redux'

const Patient_review = () => {
  const [param, setParam] = useState('faq')
  const mode = useSelector((state) => state.user.Mode)

  const renderComponent = () => {
    switch (param) {
      case 'faq':
        return <Faq />
      case 'history':
        return <History />
      default:
        return null
    }
  }

  const getLiClasses = (active) => {
    const base =
      'block py-1 px-3 rounded cursor-pointer transition-colors duration-200'
    const light =
      'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700'
    const dark =
      'text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 md:dark:hover:bg-transparent dark:border-green-700'

    const activeClasses = active
      ? 'text-green-600 dark:text-green-400 font-semibold border-b-2 border-green-500'
      : ''

    return `${base} ${mode === 'dark' ? dark : light} ${activeClasses}`
  }

  return (
    <>
      <div className="w-1/2 m-auto">
        <ul className="nav-list flex gap-4 justify-center">
          <li
            className={getLiClasses(param === 'faq')}
            onClick={() => setParam('faq')}
          >
            FAQ
          </li>
          <li
            className={getLiClasses(param === 'history')}
            onClick={() => setParam('history')}
          >
            History
          </li>
        </ul>
      </div>
      {renderComponent()}
    </>
  )
}

export default Patient_review
