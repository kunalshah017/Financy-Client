import PublicRoutes from './routes/PublicRoutes'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
    return (
        <BrowserRouter >
            <PublicRoutes />
        </BrowserRouter>
    )
}
