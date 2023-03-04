import  express from 'express';
import { 
        createMovie,
        deleteMovie,
        getMovie,
        getMoviesBygenre,
        getMoviesByrating,
        getallMovies,
        updateMovie
         } from '../controller/movie.controller';

import validate from '../middleware/validate';

import { createMovieType } from '../zod.schema/zod.user';

let router =  express.Router();




router.post("/", validate(createMovieType), createMovie)

router.get("/rating/:rating", getMoviesByrating )
router.get("/genre/:genre", getMoviesBygenre )
router.get("/", getallMovies )
router.get("/:movieTitle", getMovie )


router.put("/:movieTitle", updateMovie )

router.delete("/:movieTitle", deleteMovie )






export default router;

// import express,{ Router } from "express";

// import { 
//     createMovie ,
//     getAllMovies ,
//     updateMovie ,
//     deleteMovie ,
//     getByName,
//     getByGenre,
//     getRatingMovie,
//     } from '../controller/movie.controller'
//     import validate from '../middleware/validate';
// import { createMovieType } from "../zod.schema/zod.user";

//     const router = Router();


// router.post("/",validate(createMovieType), createMovie);

// router.get("/", getAllMovies);

// router.put("/:id", updateMovie);

// router.delete("/:id", deleteMovie);

// router.get("/:name", getByName);

// router.get("/:genre", getByGenre);

// router.get("/:rating",getRatingMovie);




// export default router;



