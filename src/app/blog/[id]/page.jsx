import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

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

async function BlogPost({ params }) {

  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.infoTitle}>
            {data.title}
          </h1>
          <p className={styles.infoDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam molestiae velit maiores quidem aut! Porro placeat consequatur sunt, eos accusantium animi alias ratione eveniet tempora provident illum a exercitationem iusto enim ipsum dignissimos aut quod delectus hic, doloremque aperiam praesentium?
          </p>
          <div className={styles.author}>
            <Image
              src={'https://images.pexels.com/photos/17029375/pexels-photo-17029375/free-photo-of-dancando-danca-vestido-moda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt={''}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
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
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsam quo officia iusto debitis sapiente aliquid, neque recusandae delectus quis eum commodi officiis architecto enim quos ut obcaecati optio! Asperiores placeat unde iure iste molestiae, esse voluptates aliquid tempora. Et perferendis vero laudantium nostrum saepe neque eligendi ullam a recusandae praesentium totam reiciendis voluptate ducimus doloremque, autem quis assumenda dolores odit ea! Nemo magni minus, quia commodi dicta natus maiores tenetur corporis ut explicabo illo aspernatur, expedita doloribus voluptas quo quos molestiae? Vero veritatis porro numquam vel aliquam, corrupti hic perferendis perspiciatis inventore placeat. Nostrum dolorem doloremque quos hic illum porro pariatur voluptatum. Molestiae incidunt, veritatis rem perferendis quas cupiditate deleniti facilis velit, obcaecati quod nemo voluptatibus rerum cum et. Voluptatum earum perferendis aspernatur iusto amet tempore labore odit laudantium quas veniam porro magnam, repellendus repellat, maxime consectetur atque autem nulla vero delectus fuga iste cupiditate facilis perspiciatis. Et alias nam sit ut obcaecati eum molestiae dignissimos ab eveniet deserunt distinctio eos nostrum molestias, officiis neque est quam nemo blanditiis repudiandae ipsam velit rem, nulla commodi. Id maxime facilis quaerat quisquam amet tenetur consequuntur sapiente pariatur quis ab magni repellat, reiciendis, aliquid blanditiis. Ratione exercitationem totam maiores ex eius cumque!
        </p>
      </div>
    </div>
  )
}

export default BlogPost