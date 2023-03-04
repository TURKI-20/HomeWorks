import express, { Request, Response } from 'express';
import {prisma} from '../config/db'

export async function createMovie(req: Request, res: Response) {
    try {    
        const post = await prisma.movie.create({
            data: {
                movieTitle: req.body.movieTitle,
                genre: req.body.genre,
                rating: req.body.rating,
                duration: req.body.duration
            },
          });
          res.json({msg: "Movie Created!"})
    }
    catch (erroe) {
      res.status(400).json({  erroe, "format":"Title, genre, rating and duration are (required)" })
    }
}
export async function getMovie(req: Request, res: Response) {

    try{
    let movie = await prisma.movie.findFirst({
            where:{

                movieTitle: req.params.movieTitle
            }
    });
    if(movie){
    res.json({Request: " movie => " + req.params.movieTitle , movie: movie})}
    else{
        res.json({error: "Movie is not found"})
    }
}
    catch(erroe){res.json({msg: erroe})}
}
export async function getallMovies(req: Request, res: Response) {
    try{
    let movies = await prisma.movie.findMany();
    res.json({Request: " movies =>", movies: movies})}
    catch(erroe){res.json({msg: erroe})}
}
export async function getMoviesByrating(req: Request, res: Response) {
    try{
    let movies = await prisma.movie.findMany({
        where:{          
            rating: Number(req.params.rating)         
        }
    });

    res.json({Request: "Movies's rating => "+ req.params.rating, movies: movies})}
    catch(erroe){res.json({msg: erroe})}
}
export async function getMoviesBygenre(req: Request, res: Response) {
    try{
    const genre = req.params
    let movies = await prisma.movie.findMany({
        where:{
            genre: genre
        }
    });
    res.json({Request: "movies's genre: "+ req.params.genre , movies: movies})}
    catch(erroe){res.json({msg: erroe})}
}
export async function updateMovie(req: Request, res: Response) {
    try{
    let movies = await prisma.movie.update({
        where:{
            movieTitle: req.params.movieTitle            
        },
        data:{
            movieTitle: req.body.movieTitle
        }
    });
    res.json({Request: "new movie's title "+ req.body.movieTitle, Movie: movies})}
    catch(erroe){res.json({msg: erroe})}
}
export async function deleteMovie(req: Request, res: Response) {
    try{
    let movies = await prisma.movie.delete({  
        where:{       
            movieTitle: req.params.movieTitle 
         }
    });
    res.json({Request: "Deleted movie: " + req.params.movieTitle })}
    catch(erroe){res.json({msg: erroe})}
}