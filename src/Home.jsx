import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getPhotos } from './redux/galleryState';
import { Link } from 'react-router-dom';
import './App.css';
export default function Home() {
    const dispatch = useDispatch()
const photos = useSelector(state=> state.gallery.photos)
useEffect(() => {
    // getData()
    dispatch(getPhotos())
},[dispatch])

  return (
    <div><h1>Gallery Photo</h1>
    <p>this is gallery using redux/toolkit and thunk</p>
    <hr/>
  <div className='Gallery'>
  { 
  photos.map(photo =>
   
   <Link  to={`/photo/${photo.id}`}>
    <img 
    src={photo.download_url}
    alt={photo.author}
    key={photo.id}
    width={400}
    height={400}
    />
   </Link>
    )}
  </div></div>
  )
}
