const { tokenize } = require('../parser/lexical');
const { parse } = require('../parser/syntactic');
const { evaluate } = require('../evaluate');
const { log, pipe } = require('../utilities');

const parseAndEvaluate = pipe(
  tokenize,
  parse,
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
