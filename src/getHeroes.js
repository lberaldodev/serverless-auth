'use strict';

module.exports.public = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                msg: "sucesso!"
            })
    };
};

module.exports.private = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                msg: "sucesso!"
            })
    };
};
