import express from 'express'


import { fileURLToPath } from 'url';
import { dirname } from 'path'
import projectsList from './projects.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app =  express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views'); 
app.use(express.static( __dirname + '/public'))

app.get('/', (req, res)=>{
    res.render('home', {projects: projectsList})
})

app.get('/projects/:projectId', (req, res)=>{
    const projectID = req.params.projectId
    for(let i in projectsList){
        if(projectsList[i].name === projectID){
            res.render('project', {project: projectsList[i]})
        }
    }
    
})

app.listen(3000 || process.env.PORT, ()=> console.log('Server started at port 3000'))