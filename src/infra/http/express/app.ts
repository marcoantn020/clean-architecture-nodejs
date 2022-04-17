import Express from 'express';
import swaggerUI from 'swagger-ui-express'

import swagger from './swagger.json'

import user from './user/user-route'
import login from './login/login-route'

const cors = require('cors')

const app = Express();
app.use(Express.json())
app.use(cors());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagger))
// routes user
app.use("/api",user)
// routes login
app.use("/api",login)


app.listen(3000, () => console.log(`Server is running on port http://localhost:3000`));