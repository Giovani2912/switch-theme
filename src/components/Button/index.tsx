import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import {Btn} from './styles'

interface Props {
    toggleTheme(): void;
  }

const Button: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return(
        <Btn>
            Teste
        </Btn>
    );

}

export default Button;
