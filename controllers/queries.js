import { connection } from "../connection.js";

export const getEquips = (req, res) => {
    // const q = "SELECT * FROM equipamentos";

    // db.query(q, (err, data) => {
    //     if (err) return res.json(err);

    //     return res.status(200).json(data);
    // });

    const q = `SELECT * FROM equipamentos ORDER BY id limit ${req.params.limit} offset ${req.params.offset} `;
    //res.send(req.params.limit+req.params.offset);

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addEquip = (req, res) => {
    const q =
        "INSERT INTO equipamentos(`nome`, `setor`, `marca`, `modelo`, `patrimonio`, `serie`) VALUES(?)";
    
    const values = [
        req.body.nome,
        req.body.setor,
        req.body.marca,
        req.body.modelo,
        req.body.patrimonio,
        req.body.serie,
    ];

    connection.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Equipamento criado com sucesso.");
    });
};

export const updateEquip = (req, res) => {
    const q =
        "UPDATE equipamentos SET `nome` = ?, `setor` = ?, `marca` = ?, `modelo` = ?, `patrimonio` = ?, `serie` = ? WHERE `id` = ?";
    
    const values = [
        req.body.nome,
        req.body.setor,
        req.body.marca,
        req.body.modelo,
        req.body.patrimonio,
        req.body.serie,
    ];

    connection.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Equipamento atualizado com sucesso.");
    });
};

export const deleteEquip = (req, res) => {
    const q = "DELETE FROM equipamentos WHERE `id` = ?";

    connection.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Equipamento deletado com sucesso.");
    });
};

export const getTotalEquips = (req, res) => {
    const q = "SELECT * FROM equipamentos";

    // res.send(req.params.id+' '+req.params.nome)
    // req.params.nome = '%'+req.params.nome+'%';

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getWithFilter = (req, res) => {

    let ParamNome = '';
    let ParamSetor = '';
    let ParamMarca = '';
    let ParamModelo = '';
    let ParamPatrimonio = '';
    let ParamSerie = '';

    if (req.params.nome == 'vazio'){
        ParamNome = '';
    } else(
        ParamNome = req.params.nome
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
    
    if (req.params.patrimonio == 'vazio'){
        ParamPatrimonio = '';
    } else(
        ParamPatrimonio = req.params.patrimonio
    );

    if (req.params.serie == 'vazio'){
        ParamSerie = '';
    } else(
        ParamSerie = req.params.serie
    );

    const q = `SELECT * FROM equipamentos WHERE nome like '%${ParamNome}%' AND setor LIKE '%${ParamSetor}%' AND
    marca LIKE '%${ParamMarca}%' AND modelo LIKE '%${ParamModelo}%' AND patrimonio LIKE '%${ParamPatrimonio}%' AND serie LIKE '%${ParamSerie}%'
    ORDER BY id limit ${req.params.limit} offset ${req.params.offset} `;

    // res.send(q);

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    }); 
};

export const getOrdens = (req, res) => {

    const q = `SELECT * FROM ordens_servicos ORDER BY id limit ${req.params.limit} offset ${req.params.offset} `;

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addOrdem = (req, res) => {
    const q =
        "INSERT INTO ordens_servicos(`data_abertura`, `unidade`, `equipamento`, `marca`, `setor`, `modelo`, `num_serie`, `patrimonio`, `solicitante`, `defeito`, `acessorios_enviados`, `tipo_os`, `local_servico`, `local_defeito`, `defeito_constatado`, `servico_realizado`, `tipo`, `descricao`, `quantidade`, `unidade_un`, `valor_unit`, `valor_total`, `tipo2`, `descricao2`, `quantidade2`, `unidade_un2`, `valor_unit2`, `valor_total2` , `tipo3`, `descricao3`, `quantidade3`, `unidade_un3`, `valor_unit3`, `valor_total3`, `tipo4`, `descricao4`, `quantidade4`, `unidade_un4`, `valor_unit4`, `valor_total4`, `total_horas`, `data_fechamento`, `tecnico_resp`, `situacao`, `recebido_por`, `matricula`) VALUES(?)";
    
    const values = [
        req.body.dataAbertura,
        req.body.unidade,
        req.body.equipamento,
        req.body.marca,
        req.body.setor,
        req.body.modelo,
        req.body.numSerie,
        req.body.patrimonio,
        req.body.solicitante,
        req.body.defectInform,
        req.body.acessorios,
        req.body.tipoOS,
        req.body.localServico,
        req.body.localDefeito,
        req.body.defectConst,
        req.body.servico,
        req.body.tipo1,
        req.body.descricao1,
        req.body.quant1,
        req.body.unid1,
        req.body.valorUnit1,
        req.body.valorTotal1,
        req.body.tipo2,
        req.body.descricao2,
        req.body.quant2,
        req.body.unid2,
        req.body.valorUnit2,
        req.body.valorTotal2,
        req.body.tipo3,
        req.body.descricao3,
        req.body.quant3,
        req.body.unid3,
        req.body.valorUnit3,
        req.body.valorTotal3,
        req.body.tipo4,
        req.body.descricao4,
        req.body.quant4,
        req.body.unid4,
        req.body.valorUnit4,
        req.body.valorTotal4,
        req.body.totalHoras,
        req.body.fechamento,
        req.body.situacao,
        req.body.tecnico,
        req.body.recebido,
        req.body.matricula,
    ];

    // res.send(values);

    connection.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Equipamento criado com sucesso.");
    });
};

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


    // res.send(q);

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    }); 
};

export const getTotalOS = (req, res) => {
    
    const q = `SELECT * FROM ordens_servicos ORDER BY id`;

    connection.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const deleteOrdem = (req, res) => {
    const q = "DELETE FROM ordens_servicos WHERE `id` = ?";

    connection.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("OS deletado com sucesso.");
    });
};

export const updateOS = (req, res) => {
    const q =
        "UPDATE ordens_servicos SET `data_abertura` = ?, `unidade` = ?, `equipamento` = ?, `marca` = ?, `setor` = ?, `modelo` = ?, `num_serie` = ?, `patrimonio` = ?, `solicitante` = ?, `defeito` = ?, `acessorios_enviados` = ?, `tipo_os` = ?, `local_servico` = ?, `local_defeito` = ?, `defeito_constatado` = ?, `servico_realizado` = ?, `tipo` = ?, `descricao` = ?, `quantidade` = ?, `unidade_un` = ?, `valor_unit` = ?, `valor_total` = ?, `tipo2` = ?, `descricao2` = ?, `quantidade2` = ?, `unidade_un2` = ?, `valor_unit2` = ?, `valor_total2` = ?, `tipo3` = ?, `descricao3` = ?, `quantidade3` = ?, `unidade_un3` = ?, `valor_unit3` = ?, `valor_total3` = ?, `tipo4` = ?, `descricao4` = ?, `quantidade4` = ?, `unidade_un4` = ?, `valor_unit4` = ?, `valor_total4` = ?, `total_horas` = ?, `data_fechamento` = ?, `tecnico_resp` = ?, `situacao` = ?, `recebido_por` = ?, `matricula` = ? WHERE `id` = ?";
    
        const values = [
            req.body.dataAbertura,
            req.body.unidade,
            req.body.equipamento,
            req.body.marca,
            req.body.setor,
            req.body.modelo,
            req.body.numSerie,
            req.body.patrimonio,
            req.body.solicitante,
            req.body.defectInform,
            req.body.acessorios,
            req.body.tipoOS,
            req.body.localServico,
            req.body.localDefeito,
            req.body.defectConst,
            req.body.servico,
            req.body.tipo1,
            req.body.descricao1,
            req.body.quant1,
            req.body.unid1,
            req.body.valorUnit1,
            req.body.valorTotal1,
            req.body.tipo2,
            req.body.descricao2,
            req.body.quant2,
            req.body.unid2,
            req.body.valorUnit2,
            req.body.valorTotal2,
            req.body.tipo3,
            req.body.descricao3,
            req.body.quant3,
            req.body.unid3,
            req.body.valorUnit3,
            req.body.valorTotal3,
            req.body.tipo4,
            req.body.descricao4,
            req.body.quant4,
            req.body.unid4,
            req.body.valorUnit4,
            req.body.valorTotal4,
            req.body.totalHoras,
            req.body.fechamento,
            req.body.situacao,
            req.body.tecnico,
            req.body.recebido,
            req.body.matricula,
        ];

    connection.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Equipamento atualizado com sucesso.");
    });
};