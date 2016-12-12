const _ = require('lodash')

const singleVowels = 'aeiou'.split('')
const comboVowels = ['ae', 'ai', 'ao', 'au', 'ei', ]
const singleConsonants = 'bcdfghjklmnprstvwz'.split('')
const comboConsonants = ['sh', 'gh', 'ph', 'th', 'ch', 'zh']

const vowels = _.concat(singleVowels, comboVowels)
const consonants = _.concat(singleConsonants, comboConsonants)

function generateName(length = 2) {
  return _.join(_.flatMap(_.sampleSize(consonants, length), consonant => [consonant, _.sample(vowels)]), '')
}

module.exports.generateName = generateName
