import { useEffect } from 'react'
import { withRouter } from './WithRouter';

const ScrollToTop = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    });
    return (null);
}

export default withRouter(ScrollToTop);
