import React from 'react'
import PageDefault from '../../../components/PageDefault/index'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>

            <form>

                <label>
                    Nome da categoria:
                    <input type = 'text' />
                </label>

                <button>
                    Cadastrar
                </button>

            </form>
            <Link to = '/'>
                <p>Home</p>
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria