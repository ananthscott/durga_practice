function InputText ({id, nameType, style, place}) {
    return(
        <input id={id} type={nameType} className={style} placeholder={place} ></input>
    );
}
export default InputText;