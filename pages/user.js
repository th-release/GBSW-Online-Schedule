import fetcher from '../utils/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() {
  const router = useRouter()  
  const { data, error } = useSWR("/api/verify", fetcher);
  if (error) {
    console.log(error) 
    return(
      <body>
        <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 에러 ... </h1>
        <form style={{textAlign: 'center'}} action='/' method='GET'>
        <Button type="submit" variant="primary">로그인 화면으로</Button>
        </form>
      </body>
    ) 
  } 
  if (!data) { 
    return(
      <body>
        <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 로딩중 ... </h1>
      </body>
    ) 
  } else {
    if (data.grade == "1"){
      if(data.class == "1"){
        return(
          <div>
            <Card>
              <Card.Img variant="top" id="Card" src="https://w.namu.la/s/8e9006cd96ae1f6e7a40648fb9e89a5bb8ea1715ac9b445e789de5c567b5e891b4b2e5a886d55d2eadba73e215baac6ea6b2b59d91074df8e36152a2c7efd372e02f258c584338f750d951e01d7a254cdcb677187dcfdbb27ee23107e8443814489d922fd653396ee4f680373c9fb285" />
              <Card.Body>                
                <Card.Text>
                1교시: {data.NowClass[1]}<br/>2교시: {data.NowClass[2]}<br/>3교시: {data.NowClass[3]}<br/>4교시: {data.NowClass[4]}<br/>5교시: {data.NowClass[6]}<br/>6교시: {data.NowClass[7]}<br/>7교시: {data.NowClass[8]}<br/>8교시: {data.NowClass[9]}<br/>9교시: {data.NowClass[9]}<br/>10교시: {data.NowClass[11]}<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      } else if (data.class == "2") {
        return(
          <div>
            {/* style={{ maxWidth: '200px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} */}
            <Card>
              <Card.Img variant="top" id="Card" src="https://w.namu.la/s/8e9006cd96ae1f6e7a40648fb9e89a5bb8ea1715ac9b445e789de5c567b5e891b4b2e5a886d55d2eadba73e215baac6ea6b2b59d91074df8e36152a2c7efd372e02f258c584338f750d951e01d7a254cdcb677187dcfdbb27ee23107e8443814489d922fd653396ee4f680373c9fb285" />
              <Card.Body>
                 <Card.Text> {/*style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}} */}
                    1교시: {data.NowClass[1]}<br/>2교시: {data.NowClass[2]}<br/>3교시: {data.NowClass[3]}<br/>4교시: {data.NowClass[4]}<br/>5교시: {data.NowClass[6]}<br/>6교시: {data.NowClass[7]}<br/>7교시: {data.NowClass[8]}<br/>8교시: {data.NowClass[9]}<br/>9교시: {data.NowClass[9]}<br/>10교시: {data.NowClass[11]}<br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      } else if (data.class == "3") {
        return(
          <div>
            <Card>
              <Card.Img variant="top" id="Card" src="https://w.namu.la/s/8e9006cd96ae1f6e7a40648fb9e89a5bb8ea1715ac9b445e789de5c567b5e891b4b2e5a886d55d2eadba73e215baac6ea6b2b59d91074df8e36152a2c7efd372e02f258c584338f750d951e01d7a254cdcb677187dcfdbb27ee23107e8443814489d922fd653396ee4f680373c9fb285" />
              <Card.Body>                
                <Card.Text>
                  1교시: {data.NowClass[1]}<br/>2교시: {data.NowClass[2]}<br/>3교시: {data.NowClass[3]}<br/>4교시: {data.NowClass[4]}<br/>5교시: {data.NowClass[6]}<br/>6교시: {data.NowClass[7]}<br/>7교시: {data.NowClass[8]}<br/>8교시: {data.NowClass[9]}<br/>9교시: {data.NowClass[9]}<br/>10교시: {data.NowClass[11]}<br/>                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      } else if (data.class == "4") {
        return(
          <div>
            <Card>
              <Card.Img variant="top" id="Card" src="https://w.namu.la/s/8e9006cd96ae1f6e7a40648fb9e89a5bb8ea1715ac9b445e789de5c567b5e891b4b2e5a886d55d2eadba73e215baac6ea6b2b59d91074df8e36152a2c7efd372e02f258c584338f750d951e01d7a254cdcb677187dcfdbb27ee23107e8443814489d922fd653396ee4f680373c9fb285" />
              <Card.Body>                
                <Card.Text>
                  1교시: {data.NowClass[1]}<br/>2교시: {data.NowClass[2]}<br/>3교시: {data.NowClass[3]}<br/>4교시: {data.NowClass[4]}<br/>5교시: {data.NowClass[6]}<br/>6교시: {data.NowClass[7]}<br/>7교시: {data.NowClass[8]}<br/>8교시: {data.NowClass[9]}<br/>9교시: {data.NowClass[9]}<br/>10교시: {data.NowClass[11]}<br/> 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      }
    }
  }
}
