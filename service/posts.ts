// import { promises as fs } from "fs";
import { readFile } from "fs/promises";
import path from "path";

/* 
비동기로 동작하는 함수
프로미스를 리턴할껀데 어떤프로미스의 데이터냐면 바로 <포스트의배열>을 리턴할꺼야
*/


/*
그럼 포스트는 뭐냐? 타입인데 어떤 타입을 가지고 있는객체냐면
그건 아래에 타입을 정의해주자
*/

/*
getAllPosts()를 호출하면 /service/posts.ts데이터를 읽어와서 JSON배열형태로 반환해줄꺼야 
*/

export type Post = {
    title: string;
    description: string;
    date : Date;
    category : string;
    path : string;
    featured: boolean;
}

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts()
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts() : Promise<Post[]> {
     const filePath = path.join(process.cwd(), 'data', 'posts.json');
     return readFile(filePath, 'utf-8')
     .then<Post[]>(JSON.parse)
     .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));

}
