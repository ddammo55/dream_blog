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


/*
모든포스트 getAllPosts()를 불러온 다음에 post.featured인 경우에만 
필터해서 데이터를 불러온다.
*/
export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts()
    .then((posts) => posts.filter((post) => post.featured));
}

// featured가 false만 가져오기
export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts()
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts() : Promise<Post[]> {
     const filePath = path.join(process.cwd(), 'data', 'posts.json');
     return readFile(filePath, 'utf-8')
     .then<Post[]>(JSON.parse)
     .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));

}

export type PostData = Post & {
    content: string;
    next: Post | null; 
    prev:Post | null 
};

export async function getPostData(fileName: string) : Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts' , `${fileName}.md`);
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === fileName);
    
    if(!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

    //posts.indexOf를 이용해서 찾고자하는 index가 몇번째 인지를 확인한 다음에 
    //이것을 이용해서 이전포스트와 다음포스트를 가지고 올 수 있다.

     const index = posts.indexOf(post);
     const next = index > 0 ? posts[index - 1] : null; // 다음 글
     const prev = index < posts.length ? posts[index + 1] : null; //이전 글
     const content = await readFile(filePath, 'utf-8');
     return {...post, content, next, prev};

}