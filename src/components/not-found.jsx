import React from 'react';
import Layout from './shared/layout';
import NotfountBanner from '../assets/banner_404.jpg'

const NotFound=()=>{
    const style={
        fontWeight: 'bold',
        textAlign: 'center',
    }

    const style_img={
        width: '90%',
        alignContent: 'center',
        margin: '0% 5%',
        height: '70vh'
    }

    return (
        <Layout>
            {/* <p style={style}>The page is not found</p> */}
            <img src={NotfountBanner} alt="Not-found-404-error" style={style_img}/>
        </Layout>
    )
}

export default NotFound;