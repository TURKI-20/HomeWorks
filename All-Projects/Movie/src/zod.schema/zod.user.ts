import {TypeOf,z} from 'zod';


export const createMovieType = z.object({

 body: z.object({
    
        movieTitle: z
        .string({
            required_error: "title is (required)",
            invalid_type_error: "title must be a string"

            })
            .min(3),
        genre: z
        .string({
            required_error: "genre is (required)",
            invalid_type_error: "genre must be a string"

            }),
        rating: z
        .number({
            required_error: "rating is (required)",
            invalid_type_error: "rating must be a number"

            }),
        duration: z
        .number({
            required_error: "duration is (required)",
            invalid_type_error: "duration must be a number"

            })

 })


});



export type createMovieschema = TypeOf<typeof createMovieType>["body"];


// import {TypeOf,z} from 'zod';
// export const createMovieType = z.object({



//  body: z.object({
    
// movieName: z
// .string({
// required_error: "Name is (required)",
// invalid_type_error: "Write as a string Please!"

// })
// .min(3),


// rating: z
// .number({
// required_error: "Rating is (required)",
// invalid_type_error: "Write as a number Please!"

// }),

// genre: z
// .string({
// required_error: "Genre is (required)",
// invalid_type_error: "Write as a string Please!"

// }),


// duration: z
// .number({
//     required_error: "Duration is (required)",
//     invalid_type_error: "Write as a number Please!"

//     })

//  })


// });



// export type createMovieschema = TypeOf<typeof createMovieType>["body"];
