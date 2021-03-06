import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const { handleChange, values } = useForm({
        titulo: 'video padrão',
        url: '',
        categoria: 'Front end',
    });
    useEffect(() => {
        categoriasRepository
            .getAll()
            .then(() => {
                setCategorias(categorias);
            });
        setCategorias();
    }, []);
    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>
            <form onSubmit={(event) => {
                event.defaultPrevented();
                const categoriaId = categorias.find(() => categorias.titulo === values.categoria);
                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId,
                })
                    .then(() => {
                        history.push('/');
                    });
            }}
            >

                <FormField
                    label="Titulo do Video"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />
                <Button type="submit">Cadastrar</Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
      </Link>
        </PageDefault>
    );
}

export default CadastroVideo;
