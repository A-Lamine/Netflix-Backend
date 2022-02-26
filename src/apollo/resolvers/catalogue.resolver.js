const Catalogue = require('../../models/catalogue.model')

module.exports = {
    Query: {
        getCatalogues: () => {
            return Catalogue.find();
        },
        getCatalogue(parent, args, context) {
            return Catalogue.findById(args.id);
        }
    
    },
    Mutation: {
        createCatalogue(parent, args) {
            
            const newCatalogue = new Catalogue(
                {
                    name: args.name,
                }
            )
            return newCatalogue.save();
      },
      updateCatalogue(parent, { id, name}) {
        return Catalogue.findByIdAndUpdate(id, { name: name});
    }
    
    }
}