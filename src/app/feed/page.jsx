'use client'
import { IconHeartBolt, IconShare, IconTrash, IconWriting } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


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

    const deletePost = (id) => {
        fetch('http://localhost:5000/post/delete/' +id,{
            method: 'DELETE'
    })

    .then((response) => {
        if(response.status === 200) {
            console.log('post deleted successfully');
            fetchPostData();
            toast.success('Post Deleted successfully');
        }
    }).catch((err) => {
        console.log(err);
    });
       }

       const updatePost = (id, dataToUpdate) => {
        fetch('http://localhost:5000/post/update/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToUpdate)
        })
            .then((response) => {
                if (response.status === 200) {
                    fetchPostData();
                    toast.success('Post was Liked');
                }
            }).catch((err) => {
                console.log(err);
            });
    }
    

  return (
    <div>
        

        <div className="container p-5">
            <div className="text-center">Trending Posts</div>


        <div className="col-md-6 mx-auto">
            {
                postArray.map( (post) => { 
                    return <div key={post._id} className='card shadow mb-5' >
                        <div className=" p-1 class-header d-flex justify-content-between">
                            <h4 className='p-3 text-center' >{post.title}</h4>
                            <div className="btn btn-danger mt-3 mb-3 " onClick={() => {deletePost(post._id)}} > <IconTrash/></div>
                        </div>
                        <img className='card-img-top' src={post.image} alt="" onDoubleClick={() => updatePost(post._id, {likes : post.likes+1})} />
                        <div className="card-footer">
                            <div className="d-flex g-4">
                                <button className="btn-outline-primary w-100" onClick={  () => updatePost(post._id, {likes : post.likes+1}) } ><IconHeartBolt></IconHeartBolt> {post.likes}  </button>
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