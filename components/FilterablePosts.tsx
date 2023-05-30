'use client';
import { Post } from "@/service/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Porps = {
    posts : Post[];
    categories : string[];
}

const ALL_POSTS = "All Posts";

export default function FilterablePosts({posts, categories} : Porps) {
    const [selected, setSelected] = useState(ALL_POSTS);
    /*
    필터드가 셀렉티드가 ALL_POSTS라면 프롭으로전달된 posts를 보여줄꺼고 그렇지 않고 특정 선택된 카테고리라면 selected에 맞는 카테고리가 filtered변수에 저장된다.
    */
    const filtered = selected === ALL_POSTS 
    ? posts 
    : posts.filter((post) => post.category === selected);
    return <section className="flex m-4">
       <PostsGrid posts={filtered} />
       {/* 사이드에 카테고리목록 */}
       <Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={(selected) => setSelected(selected)} />
    </section>
}

