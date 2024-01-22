import { useParams } from 'react-router-dom'
import PopBrowse from '../../components/PopBrowse/PopBrowse'


export default function CardPage() {
 const {category, id} = useParams();

    return (
        <PopBrowse id={id} category={category}/>
   )
}