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
                    background: args.background,
                    img: args.img,
                    description: args.description,
                    video: args.video,
                    classification: args.classification
                }
            )
            return newMovie.save();
      },
      updateMovie(parent, { id, title, background, img, description, video, classification}) {
        return Movie.findByIdAndUpdate(id, {title: title, background: background, img: img, description: description, video: video, classification: classification});
    }

}
} 