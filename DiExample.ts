class PostService {
    public getList() {
        // return list
    }
}

class ComponentList {
    constructor(public postService: PostService) { }
}

// Injector

class Injector {

    private _container = new Map();

    constructor(private _providers: any[] = []) {
        this._providers.forEach(service => this._container.set(service, new service()))
    }

    public get(service: any) {
        const serviceInstance = this._container.get(service);
        if (!serviceInstance) {
            throw Error(`RootInjector, no provider for ${service}`)
        }
        return serviceInstance;
    }

}

// Где-то в исполняемом коде Ангуляра при билде

const rootInjector = new Injector([PostService]);
const listComponent = new ComponentList(rootInjector.get(PostService));
listComponent.postService.getList()

// Иерархия инжекторов

/* 
NullInjector
PlatformInjector
RootInjector

ElementInjector => ChildComponent => GrandChild


*/
