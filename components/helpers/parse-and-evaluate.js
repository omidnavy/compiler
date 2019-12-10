const { tokenize } = require('../parser/lexical');
const { parse } = require('../parser/syntactic');
const { evaluate } = require('../evaluate');
const { log, pipe } = require('../utilities');
const { transform } = require('../transform');

const parseAndEvaluate = pipe(
  tokenize,
  parse,
  transform,
  evaluate,
);

const tokenizeAndParse = pipe(
  tokenize,
  parse,
);

const parseAndEvaluateProgram = pipe(
  tokenize,
  evaluate,
);

module.exports = {
  parseAndEvaluate,
  tokenizeAndParse,
  parseAndEvaluateProgram,
};
