import React from "react"
import style from "./CreateBook.module.css"
import Input from "../forms/Input"
import Select from "../forms/Select"
import Button from "../forms/Button"

const CreateBook = () => {
    return(
        <section className={style.create_book_container}>
            <h1>CREATE BOOK</h1>
            <input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do seu livro aqui'
                text='Titulo do livro'
            />

             <input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'
            />

             <input
                type='text'
                name='txt_livro'
                placeHolder='Digite a descrição do seu livro'
                text='Descrião do livro'
            />

            <select
                name='Categoria'
                text='Escolha uma categoria de livro'
            />

            <button
                rotulo='Cadastrar Livro'
            />

        </section>
    )
}

export default CreateBook