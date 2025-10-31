const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const jobRoutes = require('./routes/jobs')
const applicationRoutes = require('./routes/applications')
const cityRoutes = require('./routes/cities')
const companyRoutes = require('./routes/companies')
const peopleRoutes = require('./routes/peoples')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/jobs', jobRoutes)
app.use('/applications', applicationRoutes)
app.use('/cities', cityRoutes)
app.use('/companies', companyRoutes)
app.use('/peoples', peopleRoutes)
app.use('/auth', authRoutes)
app.use("/",express.static('../frontend'))


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})