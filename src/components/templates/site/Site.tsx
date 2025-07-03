import { Header } from '../../organisms/header/Header';
import './Site.scss'

export const SiteTemplate = ({ children }: { children: React.ReactNode }) => {
return (
        <div className="site-content">
            <Header/>
            <main>{children}</main>
            {/* <Footer /> */}
            {/* TODO - Colocar a opção de voltar ao home do site a partir da terceira tela. posso fazer uma validação de scroll ou current page. */}
        </div>
        
    );
};
