import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title : 'Posts',
    description : '바이클로 포스트'
  }

export default async function PostsPage() {
    //데이터 가져오기
    const posts = await getAllPosts();
    //카테고리 만들기
    //map로 카테로리를 가져오고 Set로 가져오니 중복을 허용하지 않는다. ...하나씩 낮게로 가져와 배열로 만들어준다.
    {/* @ts-expect-error Server Component*/}
    const categories = [...new Set(posts.map((post) => post.category))];
    //현재 선택된 카테고리별로 담아와야한다.
    return <FilterablePosts posts={posts} categories={categories}/>;
}
