const express = require('express')
const app =express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const {User} = require('./models/Users');

app.use(bodyParser.urlencoded({extended: true}));
// application/x-www-form-urlencoded를 분석해서 가져옴

app.use(bodyParser.json());
// application/json 타입을 분석해서 가져옴

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI);


app.get('/', (req, res) => res.send('안녕하세요'))


app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success:false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))