import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className='not-found'>
        <h1>Meal not found</h1>
        <p>
          Unfortunately, we couldn&apos;t find the meal you were looking for. Please go back to the{' '}
          <Link href='/meals'>Exploure Meals</Link> and try again.
        </p>
    </main>
  )
}

export default NotFound