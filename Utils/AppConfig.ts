class AppConfig {

    public productsUrl = "http://localhost:3030/delay/api/products/";
    public employeesUrl = "http://localhost:3030/api/employees/";
    public registerUrl = "http://localhost:3030/api/register/"
    public loginUrl = "http://localhost:3030/api/login/"
    public productsTop3Url = "http://localhost:3030/api/products/top-three"
    public outOfStockUrl = "http://localhost:3030/api/products/out-of-stock"
}

const appConfig = new AppConfig();
export default appConfig;