const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Figure = require('./Figure')
const Property = require('./Property')

const Skill = new Schema({
    name: { type: String, required: true, },
    type: { type: String, required: true, },
    amount: { type: Number, required: true, },
    style: { type: String, },
    animation: { type: String, },
    delay: { type: Number, default: 1000, },
    requirements: { type: Array, default: [], },

    levels: [Level]
})

const Level = new Schema({
    startIs: { type: Boolean, required: true, },

    name: { type: String, required: true, },
    newLevel: { type: String, default: '' },
    trainedTime: { type: Number, default: 0},
    requirements: { type: Array, default: [], }, // required resources to train
    
    effects: { type: Effect, default: () => ({})},

    states: [State],

    property: { type: Property, default: () => ({}),},
})

const Effect = new Schema({
    sky: { type: String, default: '', },  // image
    action: { type: String, default: '', }, // image
    figure: { ref: 'Figure' }, // image
})

const State = new Schema({
    who: { type: String, default: 'you', },
    name: { type: String, },
    type: { type: String, },
    effect: { type: String, },
    style: { type: String, },
    animation: { type: String, },
    property: { type: Property, default: () => ({}),},
})

module.exports = mongoose.model('Skill', Skill)