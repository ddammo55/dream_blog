import * as yup from 'yup';

// 스키마는 = yup에 있는 object().shape()함수를 이용하여 {}오브젝트골격을 만듬
const schema = yup.object().shape({
    //from이란 키가 있어야되고 : 문자열,이메일형태, 항상값이 있어야함
    from: yup.string().email().required(),
    subject : yup.string().required(),
    message: yup.string().required()
});

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}
