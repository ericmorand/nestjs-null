import {NestFactory} from "@nestjs/core";
import {MainModule} from "./module";

const start = () => {
    return NestFactory.create(MainModule)
        .then((application) => {
            return application.listen(3000);
        });
}

start();