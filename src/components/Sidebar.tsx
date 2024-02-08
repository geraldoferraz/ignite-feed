import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react' //importando do phosphor-react --> PencilLine é o nome do proprio icon
import { Avatar } from './Avatar';


export function SideBar(){
    return(
        <aside className={styles.sideBar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&w=500&q=50ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/111546608?v=4"/>
                <strong>Geraldo Ferraz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                <PencilLine size={20}/>
                Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}