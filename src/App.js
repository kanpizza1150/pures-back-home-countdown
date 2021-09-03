import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
const App = () => {
  const [diffTime, setDiffTime] = useState(null)

  const getDiff = () => {
    const eventTime = moment([2021, 10, 11, 8])
    const currentTime = moment()
    const diff = eventTime - currentTime
    const duration = moment.duration(diff)
    setDiffTime(moment.duration(duration))
  }


  useEffect(() => {
    setInterval(() => {
      getDiff()
    }, 1000)
  }, [])

  const renderTime = useCallback(() => {
    const items = [
      // { label: 'ปี', key: 'years', val: diffTime?.years() || 0 },
      // { label: 'เดือน', key: 'months', val: diffTime?.months() || 0 },
      { label: 'วัน', key: 'days', val: diffTime?.days() || 0 },
      { label: 'ชั่วโมง', key: 'hours', val: diffTime?.hours() || 0 },
      { label: 'นาที', key: 'minutes', val: diffTime?.minutes() || 0 },
      { label: 'วินาที', key: 'seconds', val: diffTime?.seconds() || 0 },
    ]
    return items.map((data) => {
      return (
        <div className='timer' key={data.key}>
          <div className='value'>{data.val}</div>
          <div className='label'>{data.label}</div>
        </div>
      )
    })
  }, [diffTime])

  return (
    <div className='container'>
      <div className='bg'>
        <div className='text top'>อีก</div>
        <div className='timer__container'>{renderTime()}</div>
        <div className='text'>
          <span>เพียว</span>จะต้องไปเก็บขี้วัวแล้ว 🐮💩
          <br />
          {' '}
        </div>
      </div>
    </div>
  )
}

export default App
