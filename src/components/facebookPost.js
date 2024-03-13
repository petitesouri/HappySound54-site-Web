import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

const FacebookPosts = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFacebookPost {
//         nodes {
//           message
//           created_time
//         }
//       }
//     }
//   `);

  return (
    <div>
      {/* <h2>Les 3 derniers posts Facebook :</h2>
      <ul>
        {data.allFacebookPost.nodes.map((post, index) => (
          <li key={index}>
            <p>{post.message}</p>
            <p>{post.created_time}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FacebookPosts;
