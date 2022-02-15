const Movie = require('../../models/movie.model');

module.exports = {
    Query: {
        getMovies: () => {
            return Movie.find().populate('classification');
        },
        getMovie(parent, args, context) {
            return Movie.findById(args.id).populate('classification');
        }

    },
    Mutation: {
        createMovie(parent, args) {
            const newMovie = new Movie(
                {
                    title: args.title,
                    img: args.img,
                    classification: args.classification
                }
            )
            return newMovie.save();
      },
      updateMovie(parent, { id, title, img}) {
        return Movie.findByIdAndUpdate(id, { title: title, img: img});
    }

}
} 