import React from 'react'
import Link from 'next/link'

const Work = () => {
  return (
    <div>
        <div>
            <h4>Work</h4>
        </div>
        <div>
            <ul>
                <li><Link href='https://body-bell-frontend.vercel.app/'><a>Body Bell Records</a></Link></li>
                <li><Link href='https://vocal-daffodil-44e825.netlify.app/'><a>Anonimusic</a></Link></li>
                <li><Link href='https://landpost.herokuapp.com/blog'><a>LandPost</a></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Work