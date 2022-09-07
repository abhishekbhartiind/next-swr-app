import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'

export default function Users() {
  const [count, setCount] = React.useState<number>(0)

  const address = `https://randomuser.me/api/?results=${count}&seed=abcd`
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR(address, fetcher)

  if (error) <p>Loading failed...</p>
  if (!data) <h1>Loading...</h1>

  return (
    <>
      <div className="col s12">
        {data &&
          data.results.map((item: any) => (
            <div key={item.cell} className={`col s12 m6 l4 user-card  ${item.gender}`}>
              <div>
                <Image
                  width={100}
                  height={100}
                  src={item.picture.large}
                  alt="user-avatar"
                  className="img"
                />
                <h3>{`${item.name.first}  ${item.name.last}`}</h3>
              </div>
              <div className="details">
                <p>Country: {item.location.country}</p>
                <p>State: {item.location.state}</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phone}</p>
                <p>Age: {item.dob.age}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="btn">
        <button onClick={() => setCount(count + 3)}>Load More Users</button>
      </div>
    </>
  )
}
