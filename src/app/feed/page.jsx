'use client'
import React, { useEffect } from 'react'


const Feed = () => {

    const fetchPostData = () => {

        fetch( 'http://localhost:5000/post/getall')
        .then((response) => {

            console.log(response.status);
            return response.json();
        })

        .then( (data) =>  {
            console.log(data);
        }  )

        .catch((err) => {
            console.log(err);
        });
    }

    // useEffect command 

    useEffect(() => {
      fetchPostData();
    }, []);
    

  return (
    <div>
        

        <div className="container p-5">
            <div className="text-center">Trending Posts</div>
        </div>

    </div>
  )
}

export default Feed