import styles from './Select.module.css'


function Select(name, text){
    return(
     <div className={{s}}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}>
            <option>Selecione uma categoria</option>
            <option>Ficção cientifica</option>
            <option>Fantasia heroica</option>
            <option>Suspense</option>
            <option>Terror</option>
        </select>
     </div>   
    )
}

export default Select