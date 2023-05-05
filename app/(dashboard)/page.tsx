'use client';

import { memo } from 'react';

import PostCard from '@/components/PostCard';
import Spinner from '@/components/Spinner';
import NewPostForm from '@/components/NewPostForm';

import { useFeedPage } from '@/hooks';

const Feed = () => {
  const { isFetching, isPostsEmpty, postEvents } = useFeedPage();

  if (isFetching) return <Spinner />;

  if (isPostsEmpty) return <p>No Posts</p>;

  return (
    <>
      <NewPostForm />
      {postEvents.sort((a, b) => b.created_at - a.created_at).map((postEvent, index) => (
        <PostCard key={`global${postEvent.id}${index}`} postId={postEvent.id} />
      ))}
    </>
  );
};

export default memo(Feed);
