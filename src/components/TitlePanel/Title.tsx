import styles from './styles.module.css'

export interface IAppProps {
    title: string
}

export function TitlePanel (props: IAppProps) {
  return (
    <>
    <h1 className={styles.title}>{props.title}</h1>      
    </>
  );
}
