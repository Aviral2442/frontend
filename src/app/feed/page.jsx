'use client'
import { IconHeartBolt, IconShare, IconWriting } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'


const Feed = () => {

    // useState

    const [postArray, setPostArray] = useState([]);

    //data comming from databased & we are displaying on frontend 

    const fetchPostData = () => {

        fetch( 'http://localhost:5000/post/getall')
        .then((response) => {

            console.log(response.status);
            return response.json();
        })

        .then( (data) =>  {
            console.log(data);
            setPostArray(data);
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


        <div className="col-md-6 mx-auto">
            {
                postArray.map( (post) => { 
                    return <div key={post._id} className='card shadow mb-5' >
                        <div className="class-header">
                            <h4 className='p-3 text-center' >{post.title}</h4>
                        </div>
                        <img className='card-img-top' src={post.image} alt="" />
                        <div className="card-footer">
                            <div className="d-flex g4">
                                <button className="btn-outline-primary w-100"><IconHeartBolt></IconHeartBolt> {post.likes}  </button>
                                <button className="btn-outline-primary w-100"><IconShare></IconShare> {post.shares}  </button>
                                <button className="btn-outline-primary w-100"><IconWriting></IconWriting> {post.comment}  </button>

                            </div>
                        </div>

                    </div>
                 } )
            }
        </div>


        </div>

    </div>
  )
}

export default Feed