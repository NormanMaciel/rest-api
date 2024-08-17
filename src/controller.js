import {pool} from './database.js';

class PersonasController{

    async getAll(req, res){
        const result = await pool.query('SELECT * FROM personas');
        res.json(result);
    }

}

export const persona = new PersonasController();
