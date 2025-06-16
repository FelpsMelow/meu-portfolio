import { Header } from '../../organisms/header/Header';
import './Site.scss'

export const SiteTemplate = ({ children }: { children: React.ReactNode }) => {
return (
        <div className="site-content">
            <Header/>
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
        
    );
};
