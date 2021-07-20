import Ajv from "ajv";

export class ValidateSchema {

    validateSchema(schema, body) {
        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(body);
        return valid;
    }

}