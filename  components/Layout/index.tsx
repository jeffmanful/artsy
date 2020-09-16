import { Wrapper } from './styled';
import Nav from '../Nav';

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Nav />
    <div className='container'>
      {children}
    </div>
  </Wrapper>
);

export default Layout;
