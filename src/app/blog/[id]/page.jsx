import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

//use the id passed to look for specific doc in posts collection
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    // throw new Error('Failed to fetch data') or
    return notFound()
  }

  return res.json();
}

//params = {id: post's collections document id}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc
  }
}

async function BlogPost({ params }) {

  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.infoTitle}>
            {data.title}
          </h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt={''}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image
              src={'https://images.pexels.com/photos/5377719/pexels-photo-5377719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt={''}
              fill={true}
              className={styles.image}
            />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost