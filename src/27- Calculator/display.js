import React, { useState } from 'react'

const Display = () => {
  const [value, setValue] = useState('')

  const handleNumbers = (e) => {
    try {
      setValue(value.concat(e.target.dataset.id))
    } catch (error) {
      setValue('' + e.target.dataset.id)
    }
  }

  const clearAll = () => {
    setValue('')
  }

  const deleteBtn = () => {
    try {
      setValue(value.slice(0, -1))
    } catch (error) {
      setValue('')
    }
  }

  const calculate = () => {
    try {
      setValue(eval(value.toString()))
    } catch (error) {
      setValue('Error')
    }
  }

  return (
    <section>
      <input type='text' value={value} />
      <main className='container'>
        <div className='operator' data-id='clear' onClick={clearAll}>
          C
        </div>
        <div className='operator' data-id='/' onClick={handleNumbers}>
          /
        </div>
        <div className='operator' data-id='*' onClick={handleNumbers}>
          X
        </div>
        <div className='operator' data-id='del' onClick={deleteBtn}>
          del
        </div>
        <div className='number' data-id='7' onClick={handleNumbers}>
          7
        </div>
        <div className='number' data-id='8' onClick={handleNumbers}>
          8
        </div>
        <div className='number' data-id='9' onClick={handleNumbers}>
          9
        </div>
        <div className='operator' data-id='-' onClick={handleNumbers}>
          -
        </div>
        <div className='number' data-id='4' onClick={handleNumbers}>
          4
        </div>
        <div className='number' data-id='5' onClick={handleNumbers}>
          5
        </div>
        <div className='number' data-id='6' onClick={handleNumbers}>
          6
        </div>
        <div className='operator' data-id='+' onClick={handleNumbers}>
          +
        </div>
        <div className='number' data-id='1' onClick={handleNumbers}>
          1
        </div>
        <div className='number' data-id='2' onClick={handleNumbers}>
          2
        </div>
        <div className='number' data-id='3' onClick={handleNumbers}>
          3
        </div>
        <div className='operator' data-id='AC' onClick={clearAll}>
          AC
        </div>
        <div className='operator' data-id='%' onClick={handleNumbers}>
          %
        </div>
        <div className='number' data-id='0' onClick={handleNumbers}>
          0
        </div>
        <div className='number' data-id='.' onClick={handleNumbers}>
          .
        </div>
        <div className='equal' data-id='equal' onClick={calculate}>
          =
        </div>
      </main>
    </section>
  )
}

export default Display
