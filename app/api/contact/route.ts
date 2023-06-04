
  import { sendEmail } from '@/service/email';
import * as yup from 'yup';

  // 스키마는 = yup에 있는 object().shape()함수를 이용하여 {}오브젝트골격을 만듬
  const bodySchema = yup.object().shape({
      //from이란 키가 있어야되고 : 문자열,이메일형태, 항상값이 있어야함
      from: yup.string().email().required(),
      subject : yup.string().required(),
      message: yup.string().required()
  });
  
export async function POST(req: Request) {
    const body = await req.json();
    //만약 스키마에 정의된 데이터타입이 정확한지 확인을 한다.
    if(!bodySchema.isValidSync(body)) {
      return new Response(JSON.stringify({message: '메일 전송에 실패했음'}),  {status: 400})
    }
    //구조분해 { } = req.body에서 받아옴
    //const {from, subject, message} = req.body;
    //노드메일러를 이용해서 메일을 전송하면 됨

    return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: '메일 전송에 실패함!' }), {
        status: 500,
      });
    });
}