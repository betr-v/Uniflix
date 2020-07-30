import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function funcaoHandler(info) {
        const { getAttribute, value } = info.target;

        setValue(getAttribute('name'), value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(infoDoEvent) {
                infoDoEvent.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={funcaoHandler}
                />
                <FormField
                    label="Nome da descircao"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={funcaoHandler}
                />
                <FormField
                    label="Descrição"
                    type="???"
                    name="descricao"
                    value={values.cor}
                    onChange={funcaoHandler}
                />
                <button>
                    Cadastrar
                </button>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria} ${indice}`} >
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault >
    )
}

export default CadastroCategoria;