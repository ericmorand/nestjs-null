import {Controller, Get, Module, Header} from "@nestjs/common";

@Controller('/null')
class NullController {
    @Get()
    @Header('content-type', 'application/json')
    index() {
        return Promise.resolve(null);
    }
}

@Module({
    controllers: [
        NullController
    ]
})
export class MainModule {

}