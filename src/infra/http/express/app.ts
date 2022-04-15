import Express from 'express';
import user from './user/user-route'

// import swaggerUI from 'swagger-ui-express'
// import swaggerClient from './client-route/swagger.json'

const cors = require('cors')

const app = Express();
app.use(Express.json())
app.use(cors());

// routes client
app.use("/api",user)
// app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerClient))


app.listen(3000, () => console.log(`Server is running on port http://localhost:3000/`));