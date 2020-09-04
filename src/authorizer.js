const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const { buildIAMPolicy } = require("./lib/util");

const myRoles = {
    //role name vs function name.
    'heroes:list': 'private'
}

const authorizeUser = (scopes, arn) => {
    //check if arn includes the role.
    return scopes.find(scope => arn.indexOf(myRoles[scope]))
}

exports.handler = async event => {
    const token = event.authorizationToken;

    try {
        const decodedUser = jwt.verify(
            token, JWT_KEY
        )

        const { user } = decodedUser;

        const userId = user.username;

        const isAllowed = authorizeUser(user.scopes, event.methodArn) ? "Allow" : "Deny"

        const authorizerContext = {
            user: JSON.stringify(user)
        }

        return buildIAMPolicy(userId, isAllowed, event.methodArn, authorizerContext)
    } catch (error) {
        return {
            //401 -> token invalido ou expirado.
            //403 -> token sem permissao para acessar a funcao.
            statusCode: 401,
            body: "Unauthorized."
        }
    }
}