import knex from 'knex'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const DBConfig = {
    host:'host', 
    port: 3306, 
    user: 'user', 
    database : 'database' 
}

const db = knex({
    client: 'mysql',
    connection: DBConfig
})

export default async function HGK_API (req, res) {
    const code = req.query.code
    const data = await fetch('https://auth.gbsw.hs.kr/api/ident', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: 'authorization_code'
        })
    }).then((res) => res.json())
    if (!data.success) return res.send({ success: false, message: data.message })
    return res.send({ success: true, token: jwt.sign({ username: data.user.id, realname: data.user.name, room: data.user.room_number, grade: data.user.grade, class: data.user.class }, process.env.SECRETHASH, { expiresIn: '8h' }) })
}