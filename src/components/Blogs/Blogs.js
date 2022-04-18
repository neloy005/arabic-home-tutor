import React from 'react';

const Blogs = () => {
    return (
        <div style={{ 'margin': '50px' }} className='page-height'>
            <h2>Difference between authorization and authentication?</h2>
            <p>Answer:Authentication হচ্ছে কোন ইউজার যখন login করতে চাইছে, তখন তার লগিন informathon সঠিক কিনা সেটা যাচাই করার প্রক্রিয়া। যেমন একজন সাধারন ইউজার। </p>
            <p>আর authorization হচ্ছে ইউজার লগিন হওয়ার পাশাপাশি তাকে extra কোন resource ব্যবহার করার আনুমতি দেওয়া। যেমন একজন সিস্টেম অ্যাডমিন।</p>
            <hr />
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Answer:সাধারণভাবে ইউজার authentication এর জন্য firebase use করা হয়। কারন একটা website এর ইউজার ডাটা protect করা, বা authentication করা, বা hacher এর থেকে protect করার জন্য authentication service provider রা expert হয়ে থাকে। তাই ওয়েবসাইট গুলো নিজে রা authentication system তৈরি না করে তাদের সার্ভিস use করে। Firebase তার মধ্যে একটি।  </p>
            <p>Authentication এর অন্য option গুলো হলঃ okta, Microsoft, Oracle, One identity, Auth0 etc.</p>
            <hr />
            <h2>What other services does firebase provide other than authentication</h2>
            <p>Answer:Hosting, Cloud messaging, Google Analytics, Predictions, Dynamic Links etc.</p>

        </div>
    );
};

export default Blogs;