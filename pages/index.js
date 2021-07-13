import Router, { useRouter } from 'next/router'
import { useState } from "react";
import { Button, Modal, Alert } from 'react-bootstrap';
const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() { 
  const router = useRouter()
    return (
        <div style={{height: '100%', textAlign: 'center', marginTop: '125px'}}>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>경소고 온라인 시간표</title>
          </head>
              <h1 style={{marginBottom: '100px'}}>접속</h1>
              <a href="https://auth.gbsw.hs.kr/auth?client_id=<CLIENT ID>&redirect_uri=<Redirect URI>&response_type=code"><Button style={{width: '250px', height: '45px'}} variant="primary" >접속</Button></a>
        </div>
    )
}
