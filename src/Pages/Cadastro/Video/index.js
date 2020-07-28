import React from 'react'
import PageDefault from '../../../components/PageDefault/index'
import { Link } from 'react-router-dom'

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>
            <Link to = '/cadastro/categoria'>
                <p>Cadastrar categoria</p>
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo