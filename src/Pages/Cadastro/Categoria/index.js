import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault/index'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField/index'

// Começando á usar o state:
// Primeiro devemos importar o useState do react



function CadastroCategoria() {


    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }


    // Guardando as categorias
    const [categorias, setCategoria] = useState([])
    
    const valoresIniciais = {
        nome: 'Nome Categoria',
        descricao: 'Alguma coisa',
        cor: '#000'
    }
    // Começar usando o useState
    const [values, setValues] = useState(valoresIniciais) // Valor inicial (OBS: Esse valor vai mudar)
    //console.log(nomeDaCategoria)  Note que o useState possui duas coisas, um valor e uma função
    // A função dentro do useState ja altera o estado
    

    function handlerChange(infosDeEvento) {
        
        setValue(
        infosDeEvento.target.getAttribute('name'),
        infosDeEvento.target.value
        //console.log(nomeDaCategoria)
        //console.log(infosDeEvento.target.value)
        //setValues.nome(infosDeEvento.target.value)
        )
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: { values.nome }</h1>

            <form style = {{ backgroundColor: values.cor }} onSubmit = {(infosDoEvento) => {
                infosDoEvento.preventDefault()
                //console.log('Vc está enviando o formulária')
                setCategoria([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>

                <FormField 
                    label = 'Nome da Categoria: '
                    type = 'text'
                    value = {values.nome}
                    onChange = {handlerChange}
                    name = 'nome'
                />

                <FormField 
                    label = 'Descrição: '
                    type = 'textarea'
                    value = {values.descricao}
                    onChange = {handlerChange}
                    nome = 'descricao'
                />

                <FormField 
                    label = 'Cor: '
                    type = 'color'
                    value = {values.cor}
                    onChange = {handlerChange}
                    name = 'cor'
                />

                <button>
                    Cadastrar
                </button>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key = {`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to = '/'>
                <p>Home</p>
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria