    const moongoose = require('mongoose');
    const schema = moongoose.Schema;

 // Place Schema
const placeSchema = new schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true
      }
    },
    address: {
      type: String
    },
    creator: {
      type: moongoose.Types.ObjectId,
      ref: 'User',
      required: true
    },
    categories: [{
      type: schema.Types.ObjectId,
      ref: 'Category'
    }],
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
  });
  
  // Create geospatial index on location field
  placeSchema.index({ location: '2dsphere' });
    module.exports = moongoose.model('Place', placeSchema);
     