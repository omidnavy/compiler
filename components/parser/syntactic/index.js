const { isOpeningParenthesis, isClosingParenthesis } = require('../helpers');
const { peek, pop } = require('../../utilities');

const parenthesize = tokens => {
    const token = pop(tokens);

    if (isOpeningParenthesis(token.value)) {
        const expression = [];

        while (!isClosingParenthesis(peek(tokens).value))
            expression.push(parenthesize(tokens));

        pop(tokens);
        return expression;
    }

    return token;
};

const parse = tokens => {
    if (Array.isArray(tokens)) {
        const [first, ...rest] = tokens;
        return {
            type: 'CallExpression',
            name: first.value,
            arguments: rest.map(parse),
        };
    }

    else {
        const { type, value } = tokens;

        if (type === 'Number')
            return { type: 'NumericLiteral', value };

        if (token.type === 'String')
            return { type: 'StringLiteral', value };

        if (token.type === 'Name')
            return { type: 'Identifier', name: value };

    }

};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
