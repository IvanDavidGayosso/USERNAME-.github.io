import React,{ useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Yu-Gi-Oh']);

    /* const handleAdd = () =>{
        setCategories([...categories, 'Yugioh']);
    } */

    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map( (category, id) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}