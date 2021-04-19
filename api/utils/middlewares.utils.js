const Joi = require('joi')
const jwt = require('jsonwebtoken')

const criarDetalhes = (error) => {
    return error.details.reduce((acc, item) => {

        console.log(acc);

        console.log(item);

        return [
            ...acc, item.message
        ];
    }, []);
}

exports.validateDTO = (type, params) => {

    return (req, res, next) => {
        
        try{

            const schema = Joi.object().keys(params);
        
            const { value, error } = schema.validate(req[type], {
            allowUnknown: false,
            });
        
            req[type] = value;
    
            return error ? res.status(422).send({
                detalhes: [...criarDetalhes(error)],
            }) : next();
        } catch (error) {
            
            console.log(error);
        }

    }

}

exports.autorizar = () => {

    return (req, res, next) => {

        const { token } = req.header;

       try {
           
           if (!token) {
               return res.status(403).send({
                   mensagem: "usuário não autorizado"
               })
           }

        const verificarToken = jwt.verify(token, process.env.JWT_KEY);    

       } catch (error) {

            console.log(`Token Error: ${error}`);

            res.status(401).send({mensagem: "usuário não autenticado"})

            // res.status(500).send({mensagem: 'Internal Server Error!!'})
       }
    }
}