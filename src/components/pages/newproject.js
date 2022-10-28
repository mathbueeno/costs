import ProjectForm from '../project/ProjectForm';
import styles from './newproject.module.css';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Crie seu Projeto!</h1>
            <p>Crie seu projeto para depois adicionar o serviço</p>
            <ProjectForm />
        </div>
    )

}

export default NewProject