// Alter an object's behavior when its state changes


interface State {
    setContext: any;
    click(context: Context): void;
    type(context: Context, words: string): void;
}

class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public click(): void {
        this.state.click(this);
    }

    public type(words: string): void {
        this.state.type(this, words);
    }
}

class EditingState implements State {
    private context: Context;

    public setContext(context: Context): void {
        this.context = context;
    }

    public click(context: Context): void {
        console.log('EditingState: Click.');
        // Implement behavior specific to editing state when an element is clicked
    }

    public type(context: Context, words: string): void {
        console.log(`EditingState: Typing - ${words}`);
        // Implement behavior specific to editing state for typing
    }
}

class ReadOnlyState implements State {
    private context: Context;

    public setContext(context: Context): void {
        this.context = context;
    }

    public click(context: Context): void {
        console.log('ReadOnlyState: Click. Nothing happens because read-only.');
        // Implement behavior specific to read-only state when an element is clicked
    }

    public type(context: Context, words: string): void {
        console.log('ReadOnlyState: Trying to type in read-only mode. Access denied.');
        // Implement behavior specific to read-only state for typing
    }
}

// Client code
const editor = new Context(new ReadOnlyState());
editor.click();
editor.type("Hello, world!");

editor.transitionTo(new EditingState());
editor.click();
editor.type("Hello, world!");
