import { connection } from "../connection.js";

export const getWithFilterOS = (req, res) => {

    let ParamAbertura = '';
    let ParamUnidade = '';
    let ParamEquipamento = '';
    let ParamSetor = '';
    let ParamMarca = '';
    let ParamModelo = '';
    let ParamPatrimonio = '';
    let ParamTecnico = '';

    if (req.params.abertura == 'vazio'){
        ParamAbertura = '';
    } else(
        ParamAbertura = req.params.abertura
    );
    if (req.params.setor == 'vazio'){
        ParamSetor = '';
    } else(
        ParamSetor = req.params.setor
    );
    if (req.params.marca == 'vazio'){
        ParamMarca = '';
    } else(
        ParamMarca = req.params.marca
    );
    
    if (req.params.modelo == 'vazio'){
        ParamModelo = '';
    } else(
        ParamModelo = req.params.modelo
    );
    
    if (req.params.unidade == 'vazio'){
        ParamUnidade = '';
    } else(
        ParamUnidade = req.params.unidade
    );

    if (req.params.equipamento == 'vazio'){
        ParamEquipamento = '';
    } else(
        ParamEquipamento = req.params.equipamento
    );

    if (req.params.patrimonio == 'vazio'){
        ParamPatrimonio = '';
    } else(
        ParamPatrimonio = req.params.patrimonio
    );

    if (req.params.tecnico == 'vazio'){
        ParamTecnico = '';
    } else(
        ParamTecnico = req.params.tecnico
    );

    const q = `SELECT * FROM ordens_servicos WHERE data_abertura like '%${ParamAbertura}%' AND setor LIKE '%${ParamSetor}%' AND
    marca LIKE '%${ParamMarca}%' AND modelo LIKE '%${ParamModelo}%' AND unidade LIKE '%${ParamUnidade}%' AND equipamento LIKE '%${ParamEquipamento}%' AND patrimonio LIKE '%${ParamPatrimonio}%' AND tecnico_resp LIKE '%${ParamTecnico}%'
    ORDER BY id limit ${req.params.limit} offset ${req.params.offset} `;

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    }); 
};