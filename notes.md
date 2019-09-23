# Binding and "props"

- "props" are passed through _property binding_: `[hero]="selectedHero"`
- The "props" must each be declared in the component, as a property on the class, tagged with `@Input` decorator: `@Input() hero: Hero;`
- Angular only binds to _public_ component properties

# Services

- Share information among classes that _don't know each other._
- Similar to redux store actually.
- Asynchronous services use the `Observable` API, which basically takes the place of the `Promise` API.

  - ```js
    // heroServoce.getHeroes(): Observable<Hero[]>
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));

    // heroServoce.getHeroes(): Promise<Hero[]>
    this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
    // or
    this.heroes = await this.heroService.getHeroes();
    ```

# Terms

- _directive_: js-type code in html, like `*ngIf` or `*ngFor`

# Dependency Injection

- Components: the html selectors of components are made available in all templates when the root `AppModule` lists them in its `declarations`.
- Module directives: html selectors from modules (aka directives) are made available in all templates when the root `AppModule` lists them in its `imports`.
- Models/props: `@Input() hero: Hero;` - class property (in `HeroDetailComponent`)
- Modules (classes) must be declared in `app.module.ts` in `@NgModule` declarations
- (at least for a module) you don't just export the class (JS) you also need to export it in the `@NgModule` annotation (NG)
- Injecting and declaring services:
  - [https://angular.io/tutorial/toh-pt4#provide-the-heroservice]
  - You _register a provider_ to make a service available to the DI system
  - You must make the `HeroService` available to the dependency injection system before Angular can _inject_ it into the `HeroesComponent` by registering a _provider_. A provider is something that can create or deliver a service; in this case, it instantiates the `HeroService` class to provide the service.
  - Providing at the root level creates a singleton for the whole app
  - Inject the service into a component by defining a parameter for the service in the component's class constructor:
    > When Angular creates a `HeroesComponent`, the Dependency Injection system sets the `heroService` parameter to the singleton instance of `HeroService`.
    - In my words, when the app constructs the component instance, it passes the service as the parameter in the constructor and makes it available to the component (it must be saying `this.heroService = heroService` )

# Decorators

- @Component
- @Input - declares a prop in its consuming class
- @Injectible - "This marks the class as one that participates in the dependency injection system"
