import React from 'react'
import styles from './page.module.css'
import Button from '@/app/components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  return data ? data : notFound();
}

function Category({ params }) {
  const data = getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map(item => (
        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.desc}>{item.desc}</p>
          <Button text={'See More'} url={'#'}/>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={item.image}
            fill={true}
            className={styles.img}
            alt={''}
          />
        </div>
        </div>
      ))}
    </div>
  )
}

export default Category