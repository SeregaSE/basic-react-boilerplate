import style from './style.module.css';

interface Props {
    children: string;
}

const Title = ({ children }: Props) => {
    return <h1 className={style.title}>{children}</h1>;
};

export default Title;
