import React from 'react';

const FacebookPost = ({ post }) => {
  return (
    <div className="facebook-post">
      <p>Nom de l'utilisateur: {post.from.name}</p>
      <p>Date de publication: {post.created_time}</p>
      <p>Message du post: {post.message}</p>
      {post.child_attachments && (
        <div className="attachments">
          {post.child_attachments.map((attachment, index) => (
            <img key={index} src={attachment.media.image.src} alt="Attachment" />
          ))}
        </div>
      )}
      {post.reactions && (
        <p>Réactions: {post.reactions.summary.total_count}</p>
      )}
    </div>
  );
}

export default FacebookPost;
