"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    // throw new Error('Failed to fetch data') or
    return notFound()
  }

  return res.json();
}

function Dashboard() {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true)
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
  //       cache: 'no-store'
  //     })
    
  //     if (!res.ok) {
  //       // throw new Error('Failed to fetch data') or
  //       return notFound()
  //     }

  //     const jsonData = await res.json();
    
  //     setData(jsonData);
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)

  console.log(data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard