import './App.css'
import {Link, useParams} from 'react-router-dom'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getPhotos } from './redux/galleryState';
export default function Photo({match}) {
const {id} = useParams();
const dispatch = useDispatch()
const photos = useSelector(state=> state.gallery.photos)
const photo = photos.filter(photo=> photo.id === id)
const p = photo[0]
console.log('author',p.author)
useEffect(() => {
    dispatch(getPhotos())
    },[dispatch])

return (
        <div className='container'>
            <img width={350} height={350} src={p.download_url} alt={p.author}/> 
            <h2>author: {p.author}</h2>
            <Link className='Button' to='/'>Back To Gallery</Link>
        </div>
)
}
