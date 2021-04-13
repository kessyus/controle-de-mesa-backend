const Joi = require('joi')

const criarDetalhes = (error) => {
    return error.details.reduce((acc, item) => {

        console.log(acc);
        console.log(item);

        return [
            ...acc, item.mensagem
        ];
    }, []);
}

exports.validateDTO = (type, params) => {

    return (req, res, next) => {
        const schema = Joi.object().keys(params);
    
        const { value, error } = schema.validate(req[type], {
        allowUnknown: false,
        });
    
        req[type] = value;

        return error ? res.status(422).send({
            detalhes: [...criarDetalhes(error)],
        }) : next();

    }

}