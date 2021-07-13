import knex from 'knex'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const DBConfig = {
    host:'host', // mysql이 돌아가는 서버 아이피
    port: 3306, // 방화벽에서 3306포트를 열어줘야한다
    user: 'user', // CREATE USER cth@'%' // '%'는 any를 뜻한다.
    database : 'database' //HGK_db라는 database 이름
}

const db = knex({
    client: 'mysql',
    connection: DBConfig
})

export default async function HGK_API (req, res) {
    const { token } = req.cookies
    const date = new Date()
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const checktoken = jwt.verify(token, process.env.SECRETHASH)
    
    const [Class] = await db.select('*').from(String(checktoken.class)).where('Days', DAYS[date.getDay()])   
    if (checktoken){
        return res.send({ success: true,
            userid: checktoken.username,
            name: checktoken.realname,
            grade: checktoken.grade,
            class: checktoken.class,
            NowClass: Class
        })
    } else return res.send({success: false})
}