const Movie = require('../../models/movie.model');
const Catalogue = require('../../models/catalogue.model')
module.exports = {
    Query: {
        getMovies: () => {
            return Movie.find();
        },
        getMovie(parent, args, context) {
            return Movie.findById(args.id);
        }

    },
    Mutation: {
        createMovie(parent, args) {
            const newMovie = new Movie(
                {
                    title: args.title,
                    img: args.img
                }
            )
            return newMovie.save();
      },
      updateMovie(parent, { id, title, img}) {
        return Movie.findByIdAndUpdate(id, { title: title, img: img});
    }

}



}