const Chance = require("chance");
const chance = new Chance(Math.random);

/**
 * Insomnia template arg.
 * @typedef InsomniaTemplateArg
 * @property {string} displayName
 * @property {string} description
 * @property {"number"} type
 * @property {any} defaultValue
 */

/**
 * Insomnia template tag.
 * @typedef InsomniaTemplateTag
 * @property {string} displayName
 * @property {string} name
 * @property {string} description
 * @property {InsomniaTemplateArg[]} args
 * @property {function} run
 */

/** @type {InsomniaTemplateTag} **/
const bool = {
  displayName: "random.bool",
  name: "random.bool",
  description: "Generate a random boolean value (true or false).",
  args: [
    {
      displayName: "likelihood",
      description: "The default likelihood of success (returning true)",
      type: "number",
      defaultValue: 50,
    },
  ],
  run(_, likelihood) {
    return chance.bool({likelihood});
  },
};

/** @type {InsomniaTemplateTag} **/
const sentence = {
  displayName: "random.sentence",
  name: "random.sentence",
  description: "Generate a random sentence.",
  args: [
    {
      displayName: "words",
      description: "Number of words in the sentence",
      type: "number",
      defaultValue: 5,
    },
  ],
  run(_, words) {
    return chance.sentence({words});
  },
};

/** @type {InsomniaTemplateTag} **/
const floating = {
  displayName: "random.floating",
  name: "random.floating",
  description: "Generate a random floating point number.",
  args: [
    {
      displayName: "fixed",
      description: "Number of fixed digits after the decimal",
      type: "number",
      defaultValue: 4,
    },
    {
      displayName: "min",
      description: "Min",
      type: "number",
      defaultValue: 0,
    },
    {
      displayName: "max",
      description: "Max",
      type: "number",
      defaultValue: 100,
    },
  ],
  run(_, fixed, min, max) {
    return chance.floating({fixed, min, max});
  },
};

module.exports.templateTags = [bool, sentence, floating];
