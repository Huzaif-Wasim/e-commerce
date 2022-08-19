const FormInput = ({ label, ...others }) => {
    <div>
        <label>{label}</label>
        <input {...others}></input>
    </div>

}