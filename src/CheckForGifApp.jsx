import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import PropTypes from 'prop-types';


export const CheckForGifApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Messi' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>CheckForGifApp</h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
CheckForGifApp.propTypes = { initialCategories: PropTypes.arrayOf(PropTypes.string) };
CheckForGifApp.defaultProps = { initialCategories: ['Messi'] };