import ConfigProvider from "./components/context/ConfigContext";
import Header from "./components/molecules/Header";



export default function Main () {

    return(
        <>
            <ConfigProvider>
                <Header />
                <h1>Main Page</h1>
            </ConfigProvider>
        </>
    )
}