import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/* header -> avatar + username */}
            
            <img className="post__image" src="https://img.fonwall.ru/o/eg/reka-techenie-les-derevya.jpg"/>
            {/* imagee*/}

            <h4 className="post__text" > <strong>MohammadHossein</strong>: caption</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
