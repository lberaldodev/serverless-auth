const buildIAMPolicy = (user_id, effect, resource, context) => {
    console.log("BUILD IAM POLICY", user_id)
    const policy = {
        principalId: user_id,
        policyDocument: {
            Statement: [{
                Action: "execute-api:Invoke",
                //Allow | Deny
                Effect: effect,
                //arn
                Resource: resource
            }]
        },
        //response
        context
    }
    return policy;
}

module.exports = {
    buildIAMPolicy
}